import React from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Card, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const form = () => {
    const {push} = useRouter()
  const {register, handleSubmit} = useForm ()
  
  function salvar(dados){
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.push(dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }
  return (
   <>
    <Pagina>
      <Card>
        <Card.Body>

    <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control {...register('nome')} type="text" placeholder="Nome do curso" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="duracao">
        <Form.Label>Duração</Form.Label>
        <Form.Control {...register('duracao')} type="text" placeholder="Duração" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>Modalidade</Form.Label>
        <Form.Control {...register('modalidade')} type="text" placeholder="Modalidade do curso" />
      </Form.Group>
      <Button onClick={handleSubmit(salvar)} variant="primary" type="submit">
        Salvar
      </Button>
    </Form>
        </Card.Body>
      </Card>
    </Pagina>
   </>
  )
}

export default form
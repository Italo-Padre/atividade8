import React from 'react'
import Pagina from '../../Components/Pagina'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Button, Card, Form } from 'react-bootstrap'

const form = () => {
    const {push} = useRouter()
  const {register, handleSubmit} = useForm ()

 
  function salvar(dados){
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.push(dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }
  return (
    <>
        <Pagina>
            <Card>
                <Card.Body>

        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control {...register('nome')} type="text" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="caTipo">
        <Form.Label>Data de inicio</Form.Label>
        <Form.Control {...register('data_inicio')} type="date" placeholder="Data de inicio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="data_fim">
        <Form.Label>Data do final</Form.Label>
        <Form.Control {...register('data_fim')} type="date" placeholder="Data do final" />
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
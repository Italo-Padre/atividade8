import React from 'react'
import Pagina from '../../Components/Pagina'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Button, Card, Form } from 'react-bootstrap'

const form = () => {
    const {push} = useRouter()
  const {register, handleSubmit} = useForm ()

 
  function salvar(dados){
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.push(dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
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
        <Form.Label>Capacidade</Form.Label>
        <Form.Control {...register('capacidade')} type="number" placeholder="Capacidade" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tipo">
        <Form.Label>Tipo</Form.Label>
        <Form.Control {...register('tipo')} type="text" placeholder="Tipo" />
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
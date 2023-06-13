import React from 'react'
import Pagina from '../../Components/Pagina'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Button, Card, Form } from 'react-bootstrap'
import salasValidator from '../../validators/salasValidator'

const form = () => {
    const {push} = useRouter()
  const {register, handleSubmit, formState:{errors }} = useForm ()

 
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
        <Form.Control isInvalid={errors.nome} {...register('nome',salasValidator.nome)} type="text" placeholder="Nome" />
        {
          errors.nome  &&
          <small>{errors.nome.message}</small>
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="caTipo">
        <Form.Label>Capacidade</Form.Label>
        <Form.Control isInvalid={errors.capacidade} {...register('capacidade',salasValidator.capacidade)} type="number" placeholder="Capacidade" />
        {
          errors.capacidade  &&
          <small>{errors.capacidade.message}</small>
        }
      </Form.Group>
      <Form.Group className="mb-3" controlId="tipo">
        <Form.Label>Tipo</Form.Label>
        <Form.Control isInvalid={errors.tipo} {...register('tipo',salasValidator.tipo)} type="text" placeholder="Tipo" />
        {
          errors.tipo  &&
          <small>{errors.tipo.message}</small>
        }
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
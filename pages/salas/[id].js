import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import salasValidator from '../../validators/salasValidator'

const alterar = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const salas = JSON.parse(window.localStorage.getItem('salas'))
      const sala = salas[query.id]
      for (let atributo in sala) {
        setValue(atributo, sala[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const salas = JSON.parse(window.localStorage.getItem('salas')) || []
    salas.splice(query.id, 1, dados)
    window.localStorage.setItem('salas', JSON.stringify(salas))
    push('/salas')
  }
  return (
    <>
      <Pagina>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome', salasValidator.nome)} type="text" placeholder="Nome" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="caTipo">
            <Form.Label>Capacidade</Form.Label>
            <Form.Control isInvalid={errors.capacidade} {...register('capacidade', salasValidator.capacidade)} type="number" placeholder="Capacidade" />
            {
              errors.capacidade &&
              <small>{errors.capacidade.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="tipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Control isInvalid={errors.tipo} {...register('tipo', salasValidator.tipo)} type="text" placeholder="Tipo" />
            {
              errors.tipo &&
              <small>{errors.tipo.message}</small>
            }
          </Form.Group>
          <Button onClick={handleSubmit(salvar)} variant="primary" type="submit">
            Salvar
          </Button>
        </Form>
      </Pagina>
    </>
  )
}

export default alterar
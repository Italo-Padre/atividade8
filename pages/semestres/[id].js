import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Button, Card, Form } from 'react-bootstrap'
import semestresValidator from '../../validators/semestresValidator'

const alterar = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const semestres = JSON.parse(window.localStorage.getItem('semestres'))
      const semestre = semestres[query.id]
      for (let atributo in semestre) {
        setValue(atributo, semestre[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.splice(query.id, 1, dados)
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
                <Form.Control isInvalid={errors.nome} {...register('nome', semestresValidator.nome)} type="text" placeholder="Nome" />
                {
                  errors.nome &&
                  <small>{errors.nome.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3" controlId="caTipo">
                <Form.Label>Data de inicio</Form.Label>
                <Form.Control isInvalid={errors.data_inicio} {...register('data_inicio', semestresValidator.data_inicio)} type="date" placeholder="Data de inicio" />
                {
                  errors.dataInicio &&
                  <small>{errors.data_inicio.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3" controlId="data_fim">
                <Form.Label>Data do final</Form.Label>
                <Form.Control isInvalid={errors.data_fim} {...register('data_fim', semestresValidator.data_fim)} type="date" placeholder="Data do final" />
                {
                  errors.data_fim &&
                  <small>{errors.data_fim.message}</small>
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

export default alterar
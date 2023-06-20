import React from 'react'
import Pagina from '../../Components/Pagina'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Button, Card, Form } from 'react-bootstrap'
import semestresValidator from '../../validators/semestresValidator'

const form = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm()


  function salvar(dados) {
    const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
    semestres.push(dados)
    window.localStorage.setItem('semestres', JSON.stringify(semestres))
    push('/semestres')
  }

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    const mascara = (event.target.getAttribute('mask'))
    setValue(name, mask(value, mascara))
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
                <Form.Control isInvalid={errors.data_inicio}
                 {...register('data_inicio', semestresValidator.data_inicio)} 
                 mask='99/99/9999' onChange={handleChange}
                 type="text" placeholder="Data de inicio" />
                {
                  errors.dataInicio &&
                  <small>{errors.data_inicio.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3" controlId="data_fim">
                <Form.Label>Data do final</Form.Label>
                <Form.Control isInvalid={errors.data_fim}
                 {...register('data_fim', semestresValidator.data_fim)}
                 mask='99/99/9999' onChange={handleChange}
                 type="text" placeholder="Data do final" />
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

export default form
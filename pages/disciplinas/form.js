import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '../../Components/Pagina';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import disciplinasValidator from '../../validators/desciplinasValidator';

const form = () => {
  const [cursos, setCursos] = useState([])
  const [disciplinas, setdisciplinas] = useState([])
  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    setCursos(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }
  function salvar(dados) {
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.push(dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push('/disciplinas')
  }
  return (
    <>
      <Pagina>
        <Card>
          <Card.Body>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Disciplina</Form.Label>
                <Form.Control isInvalid={errors.disciplinas} {...register('disciplinas', disciplinasValidator.disciplinas)} id="Disciplina" placeholder="Disciplina" />
                {
                  errors.disciplinas &&
                  <small>{errors.disciplinas.message}</small>
                }
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label >Curso</Form.Label>
                  <Form.Select isInvalid={errors.curso} {...register('curso', disciplinasValidator.disciplinas)} id="curso">
                    {cursos.map(item => (
                      <option>{item.nome}</option>
                    ))}
                  </Form.Select>
                  {
                    errors.disciplinas &&
                    <small>{errors.disciplinas.message}</small>
                  }
                </Form.Group>
              <Button onClick={handleSubmit(salvar)} type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Pagina>
    </>
  )
}

export default form
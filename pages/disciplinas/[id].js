import React, { useEffect, useState } from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import disciplinasValidator from '../../validators/desciplinasValidator'

const alterar = () => {
  const [cursos, setCursos] = useState([])
  const [disciplinas, setDisciplinas] = useState([])
  useEffect(() => {
    setCursos(getAll)
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
      const disciplina = disciplinas[query.id]
      for (let atributo in disciplina) {
        setValue(atributo, disciplina[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas')) || []
    disciplinas.splice(query.id, 1, dados)
    window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    push('/disciplinas')
  }

  return (
    <>
      <Pagina>
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
      </Pagina>
    </>
  )
}

export default alterar
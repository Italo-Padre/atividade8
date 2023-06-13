import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import cursoValidator from '../../validators/cursoValidator'

const alterar = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const cursos = JSON.parse(window.localStorage.getItem('cursos'))
      const curso = cursos[query.id]
      for (let atributo in curso) {
        setValue(atributo, curso[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }
  return (
    <>
      <Pagina>
        <Form>
          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control isInvalid={errors.nome} {...register('nome', cursoValidator.nome)} type="text" placeholder="Nome do curso" />
            {
              errors.nome &&
              <small>{errors.nome.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="duracao">
            <Form.Label>Duração</Form.Label>
            <Form.Control isInvalid={errors.duracao} {...register('duracao', cursoValidator.duracao)} type="text" placeholder="Duração" />
            {
              errors.duracao &&
              <small>{errors.duracao.message}</small>
            }
          </Form.Group>
          <Form.Group className="mb-3" controlId="modalidade">
            <Form.Label>Modalidade</Form.Label>
            <Form.Control isInvalid={errors.modalidade} {...register('modalidade', cursoValidator.modalidade)} type="text" placeholder="Modalidade do curso" />
            {
              errors.modalidade &&
              <small>{errors.modalidade.message}</small>
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
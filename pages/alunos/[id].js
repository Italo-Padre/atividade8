import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import alunosValidator from '../../validators/alunosValidator'

const alterar = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()

  useEffect(() => {
    if (query.id) {
      const alunos = JSON.parse(window.localStorage.getItem('alunos'))
      const aluno = alunos[query.id]
      for (let atributo in aluno) {
        setValue(atributo, aluno[atributo])
      }
    }
  }, [query.id])

  function salvar(dados) {
    const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
    alunos.splice(query.id, 1, dados)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    push('/alunos')
  }
  return (
    <>
      <Pagina>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control isInvalid={errors.nome} {...register('nome', alunosValidator.nome)} type="text" placeholder="Nome" />
              {
                errors.nome &&
                <small>{errors.nome.message}</small>
              }
            </Form.Group>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="cpf">
                  <Form.Label>Cpf</Form.Label>
                  <Form.Control isInvalid={errors.cpf} {...register('cpf', alunosValidator.cpf)} type="text" placeholder="Cpf" />
                  {
                    errors.cpf &&
                    <small>{errors.cpf.message}</small>
                  }
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="matricula">
                  <Form.Label>Matricula</Form.Label>
                  <Form.Control isInvalid={errors.matricula} {...register('matricula', alunosValidator.matricula)} type="text" placeholder="Matricula" />
                  {
                    errors.matricula &&
                    <small>{errors.matricula.message}</small>
                  }
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control isInvalid={errors.email} {...register('email', alunosValidator.email)} type="email" placeholder="E-mail" />
                  {
                    errors.email &&
                    <small>{errors.email.message}</small>
                  }
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="cep">
                  <Form.Label>CEP</Form.Label>
                  <Form.Control isInvalid={errors.cep} {...register('cep', alunosValidator.cep)} type="text" placeholder="CEP" />
                  {
                    errors.cep &&
                    <small>{errors.cep.message}</small>
                  }
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="telefone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control isInvalid={errors.telefone} {...register('telefone', alunosValidator.telefone)} type="text" placeholder="Telefone" />
                  {
                    errors.telefone &&
                    <small>{errors.telefone.message}</small>
                  }
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="logradouro">
                  <Form.Label>Logradouro</Form.Label>
                  <Form.Control isInvalid={errors.logradouro} {...register('logradouro', alunosValidator.logradouro)} type="text" placeholder="Logradouro" />
                  {
                    errors.logradouro &&
                    <small>{errors.logradouro.message}</small>
                  }
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="complemento">
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control isInvalid={errors.complemento} {...register('complemento', alunosValidator.complemento)} type="text" placeholder="Complemento" />
                  {
                    errors.complemento &&
                    <small>{errors.complemento.message}</small>
                  }
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="numero">
                  <Form.Label>Número</Form.Label>
                  <Form.Control isInvalid={errors.numero} {...register('numero', alunosValidator.numero)} type="number" placeholder="Número" />
                  {
                    errors.numero &&
                    <small>{errors.numero.message}</small>
                  }
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="bairro">
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control isInvalid={errors.bairro} {...register('bairro', alunosValidator.bairro)} type="text" placeholder="Bairro" />
                  {
                    errors.bairro &&
                    <small>{errors.bairro.message}</small>
                  }
                </Form.Group>
              </Col>
            </Row>
            <Button onClick={handleSubmit(salvar)} variant="primary" type="submit">
              Salvar
            </Button>
          </Form>
        </Card.Body>
      </Pagina>
    </>
  )
}

export default alterar
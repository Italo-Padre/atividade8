import React from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import professoresValidator from '../../validators/professoresValidator'

const form = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm()


  function salvar(dados) {
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.push(dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }
  return (

    <>
      <Pagina>
        <Card>
          <Card.Body>

            <Form>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome</Form.Label>
                <Form.Control isInvalid={errors.nome} {...register('nome', professoresValidator.nome)} type="text" placeholder="Nome" />
                {
                  errors.nome &&
                  <small>{errors.nome.message}</small>
                }
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf</Form.Label>
                    <Form.Control isInvalid={errors.cpf} {...register('cpf', professoresValidator.cpf)} type="text" placeholder="Cpf" />
                    {
                      errors.cpf &&
                      <small>{errors.cpf.message}</small>
                    }
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control isInvalid={errors.matricula} {...register('matricula', professoresValidator.matricula)} type="text" placeholder="Matricula" />
                    {
                      errors.matricula &&
                      <small>{errors.matricula.message}</small>
                    }
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>

                  <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario</Form.Label>
                    <Form.Control isInvalid={errors.salario} {...register('salario', professoresValidator.salario)} type="text" placeholder="salario" />
                    {
                      errors.salario &&
                      <small>{errors.salario.message}</small>
                    }
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control isInvalid={errors.email} {...register('email', professoresValidator.email)} type="email" placeholder="E-mail" />
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
                    <Form.Control isInvalid={errors.cep} {...register('cep', professoresValidator.cep)} type="text" placeholder="CEP" />
                    {
                      errors.cep &&
                      <small>{errors.cep.message}</small>
                    }
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control isInvalid={errors.telefone} {...register('telefone', professoresValidator.telefone)} type="text" placeholder="Telefone" />
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
                    <Form.Control isInvalid={errors.logradouro} {...register('logradouro', professoresValidator.logradouro)} type="text" placeholder="Logradouro" />
                    {
                      errors.logradouro &&
                      <small>{errors.logradouro.message}</small>
                    }
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>Complemento</Form.Label>
                    <Form.Control isInvalid={errors.complemento} {...register('complemento', professoresValidator.complemento)} type="text" placeholder="Complemento" />
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
                    <Form.Control isInvalid={errors.numero} {...register('numero', professoresValidator.numero)} type="number" placeholder="Número" />
                    {
                      errors.numero &&
                      <small>{errors.numero.message}</small>
                    }
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control isInvalid={errors.bairro} {...register('bairro', professoresValidator.bairro)} type="text" placeholder="Bairro" />
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
        </Card>
      </Pagina>
    </>
  )
}

export default form
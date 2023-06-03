import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const alterar = () => {
  const {push, query} = useRouter()
  const {register, handleSubmit, setValue} = useForm ()

  useEffect(()=> {
    if(query.id){
      const professores = JSON.parse(window.localStorage.getItem('professores'))
      const professor = professores[query.id]
      for(let atributo in professor){
        setValue(atributo,professor[atributo])
      }
    }
  }, [query.id])

  function salvar(dados){
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.splice(query.id, 1, dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push('/professores')
  }
  return (
    <>
        <Pagina>
        <Card>
        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control {...register('nome')} type="text" placeholder="Nome" />
      </Form.Group>
      <Row>
        <Col md={4}>
      <Form.Group className="mb-3" controlId="cpf">
        <Form.Label>Cpf</Form.Label>
        <Form.Control {...register('cpf')} type="text" placeholder="Cpf" />
      </Form.Group>    
        </Col>
        <Col md={4}>
      <Form.Group className="mb-3" controlId="matricula">
        <Form.Label>Matricula</Form.Label>
        <Form.Control {...register('matricula')} type="text" placeholder="Matricula" />
      </Form.Group>
        </Col>
        <Col md={4}>
      <Form.Group className="mb-3" controlId="salario">
        <Form.Label>salário</Form.Label>
        <Form.Control {...register('salario')} type="text" placeholder="salário" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control {...register('email')} type="email" placeholder="E-mail" />
      </Form.Group>
        </Col>
        <Col md={6}>
      <Form.Group className="mb-3" controlId="telefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control {...register('telefone')} type="text" placeholder="Telefone" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
      <Form.Group className="mb-3" controlId="cep">
        <Form.Label>CEP</Form.Label>
        <Form.Control {...register('cep')} type="text" placeholder="CEP" />
      </Form.Group>
        </Col>
        <Col md={4}>
      <Form.Group className="mb-3" controlId="logradouro">
        <Form.Label>Logradouro</Form.Label>
        <Form.Control {...register('logradouro')} type="text" placeholder="Logradouro" />
      </Form.Group>
        </Col>
        <Col md={4}>
      <Form.Group className="mb-3" controlId="complemento">
        <Form.Label>Complemento</Form.Label>
        <Form.Control {...register('complemento')} type="text" placeholder="Complemento" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>   
      <Form.Group className="mb-3" controlId="numero">
        <Form.Label>Número</Form.Label>
        <Form.Control {...register('complemento')} type="number" placeholder="Número" />
      </Form.Group>
        </Col>
        <Col md={6}>
      <Form.Group className="mb-3" controlId="bairro">
        <Form.Label>Bairro</Form.Label>
        <Form.Control {...register('bairro')} type="text" placeholder="Bairro" />
      </Form.Group>
        </Col>
      </Row>
      <Button onClick={handleSubmit(salvar)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
        </Pagina>
    </>
  )
}

export default alterar
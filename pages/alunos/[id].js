import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const alterar = () => {
    const {push, query} = useRouter()
    const {register, handleSubmit, setValue} = useForm ()
  
    useEffect(()=> {
      if(query.id){
        const alunos = JSON.parse(window.localStorage.getItem('alunos'))
        const aluno = alunos[query.id]
        for(let atributo in aluno){
          setValue(atributo,aluno[atributo])
        }
      }
    }, [query.id])
  
    function salvar(dados){
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
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control {...register('email')} type="email" placeholder="E-mail" />
      </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
      <Form.Group className="mb-3" controlId="cep">
        <Form.Label>CEP</Form.Label>
        <Form.Control {...register('cep')} type="text" placeholder="CEP" />
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
        <Col md={6}>
      <Form.Group className="mb-3" controlId="logradouro">
        <Form.Label>Logradouro</Form.Label>
        <Form.Control {...register('logradouro')} type="text" placeholder="Logradouro" />
      </Form.Group>
        </Col>
        <Col md={6}>
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
    </Card.Body>
        </Pagina>
    </>
  )
}

export default alterar
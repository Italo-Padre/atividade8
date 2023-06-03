import React, { useEffect } from 'react'
import Pagina from '../../Components/Pagina'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'

const alterar = () => {
    const {push, query} = useRouter()
    const {register, handleSubmit, setValue} = useForm ()
  
    useEffect(()=> {
      if(query.id){
        const semestres = JSON.parse(window.localStorage.getItem('semestres'))
        const semestre = semestres[query.id]
        for(let atributo in semestre){
          setValue(atributo,semestre[atributo])
        }
      }
    }, [query.id])
  
    function salvar(dados){
      const semestres = JSON.parse(window.localStorage.getItem('semestres')) || []
      semestres.splice(query.id, 1, dados)
      window.localStorage.setItem('semestres', JSON.stringify(semestres))
      push('/semestres')
    }
  return (
    <>
        <Pagina>
        <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control {...register('nome')} type="text" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="caTipo">
        <Form.Label>Data de inicio</Form.Label>
        <Form.Control {...register('data_inicio')} type="number" placeholder="Data de inicio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="data_fim">
        <Form.Label>Data do final</Form.Label>
        <Form.Control {...register('data_fim')} type="text" placeholder="Data do final" />
      </Form.Group>
      <Button onClick={handleSubmit(salvar)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Pagina>
    </>
  )
}

export default alterar
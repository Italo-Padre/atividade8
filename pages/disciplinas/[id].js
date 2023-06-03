import React, { useEffect, useState } from 'react'
import Pagina from '../../Components/Pagina'
import { Button, Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const alterar = () => {
  const [cursos, setCursos] = useState([])
    const [disciplinas, setDisciplinas] = useState([])
     useEffect(() => {
    setCursos(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }
    const {push, query} = useRouter()
    const {register, handleSubmit, setValue} = useForm ()
  
    useEffect(()=> {
      if(query.id){
        const disciplinas = JSON.parse(window.localStorage.getItem('disciplinas'))
        const disciplina = disciplinas[query.id]
        for(let atributo in disciplina){
          setValue(atributo,disciplina[atributo])
        }
      }
    }, [query.id])
  
    function salvar(dados){
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
          <Form.Control {...register('disciplinas')} id="Disciplina" placeholder="Disciplina" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label >Curso</Form.Label>
          <Form.Select {...register('curso')} id="curso">
            {cursos.map(item=>(
                <option>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button onClick={handleSubmit(salvar)} type="submit">Submit</Button>
    </Form> 
        </Pagina>
    </>
  )
}

export default alterar
import React, { useEffect, useState } from 'react'
import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import {AiFillEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

const index = () => {
    const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
    setDisciplinas(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('disciplinas')) || []
  }
  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const disciplinas = getAll()
      disciplinas.splice(id,1)
      window.localStorage.setItem('disciplinas', JSON.stringify(disciplinas))
      setDisciplinas(disciplinas)
    }
  }
  return (
    <>
        <Pagina>
        <Link href={'/disciplinas/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Disciplina</th>
        </tr>
      </thead>
      <tbody> 
        {disciplinas.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/disciplinas/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.curso}</td>
          <td>{item.disciplinas}</td>
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index
import React, { useEffect, useState } from 'react'
import Pagina from '../../Components/Pagina'
import { Table } from 'react-bootstrap'
import Link from 'next/link'
import {AiFillEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

const index = () => {
    const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const cursos = getAll()
      cursos.splice(id,1)
      window.localStorage.setItem('cursos', JSON.stringify(cursos))
      setCursos(cursos)
    }
  }
  return (
    <>
        <Pagina>
        <Link href={'/cursos/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Duração</th>
          <th>Modalidade</th>
        </tr>
      </thead>
      <tbody> 
        {cursos.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/cursos/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.duracao}</td>
          <td>{item.modalidade}</td>
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index
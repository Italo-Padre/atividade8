import React, { useEffect, useState } from 'react'
import Pagina from '../../Components/Pagina'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import {AiFillEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

const index = () => {
    const [salas, setSalas] = useState([])

    useEffect(() => {
      setSalas(getAll)
    },[])
  
    function getAll(){
      return JSON.parse(window.localStorage.getItem('salas')) || []
    }
    function excluir(id){
      if(confirm('Deseja realmente excluir ?')){
        const salas = getAll()
        salas.splice(id,1)
        window.localStorage.setItem('salas', JSON.stringify(salas))
        setSalas(salas)
      }
    }
  return (
    <>
        <Pagina>
        <Link href={'/salas/form'} className='btn btn-primary mb-2' >Novo</Link>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Capacidade</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody> 
        {salas.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/salas/'+i}><AiFillEdit className='me-2' /></Link>
            
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.capacidade}</td>
          <td>{item.tipo}</td>
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index
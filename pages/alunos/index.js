import React, { useEffect, useState } from 'react'
import Pagina from '../../Components/Pagina'
import { Table } from 'react-bootstrap'
import Link from 'next/link'
import {AiFillEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

const index = () => {
    const [alunos, setAlunos] = useState([])

  useEffect(() => {
    setAlunos(getAll)
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('alunos')) || []
  }
  function excluir(id){
    if(confirm('Deseja realmente excluir ?')){
      const alunos = getAll()
      alunos.splice(id,1)
      window.localStorage.setItem('alunos', JSON.stringify(alunos))
      setAlunos(alunos)
    }
  }
  return (
    <>
        <Pagina>
        <Link href={'/alunos/form'} className='btn btn-primary mb-2' >Novo</Link>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Mátricula</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>CEP</th>
          <th>logradouro</th>
          <th>Complemento</th>
          <th>Número</th>
          <th>Bairro</th>
        </tr>
      </thead>
      <tbody> 
        {alunos.map((item, i) =>(
          <tr key={i}>
          <td >
            <Link href={'/alunos/'+i}><AiFillEdit className='me-2' /></Link>
            <AiOutlineDelete onClick={()=>excluir(i)}/>
            </td>
          <td>{item.nome}</td>
          <td>{item.cpf}</td>
          <td>{item.matricula}</td>
          <td>{item.email}</td>
          <td>{item.telefone}</td>
          <td>{item.cep}</td>
          <td>{item.logradouro}</td>
          <td>{item.complemento}</td>
          <td>{item.numero}</td>
          <td>{item.bairro}</td>
        </tr>
          ))}
        
      </tbody>
    </Table>
        </Pagina>
    </>
  )
}

export default index
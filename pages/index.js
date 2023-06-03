import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Pagina from '../Components/Pagina';
import { Card } from 'react-bootstrap';

export default function Home() {
  return (
   <>
    <Pagina>
    <Card className="text-center mt-3">
      <Card.Body>
        <Card.Header></Card.Header>
        <Card.Title> <h1>Atividade 8</h1></Card.Title>
        <h1>
        criação de CRUDS
        </h1>
        <Card.Footer></Card.Footer>
      </Card.Body>
    </Card>
    </Pagina>
   </>
  )
}

import Pagina from "../../Modelo/Pagina";
import {Table,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { useState, useEffect } from "react";







export default function Reg_pessoa(props)
{
  const [lista,setLista] = useState([
  {
    id: "", 
    cpf:  "",
  nome:  "",
  telefone: "",
  rua:  "",
  cep:  "",
  tipo: "",
  numero: ""
    
  }])
  const [exib,setExib]= useState([])

  function carregar()
  {
     fetch('http://localhost:4000/pessoa', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => setLista(json))
    .catch(err => console.log(err));
  }
      useEffect (() => {
        carregar();
        setExib(lista)
      }, []);

    return(
        <Pagina>
          <p className="text-center">Registros de Pessoas</p>
             <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Rua</th>
          <th>Cep</th>
          <th>Numero</th>
         
        </tr>
      </thead>
      <tbody>
        {

         
lista.map((pessoa) =>{
  return <tr key={pessoa.id}>
      <td>{pessoa.nome}</td>
      <td>{pessoa.tipo}</td>
      <td>{pessoa.cpf}</td>
      <td>{pessoa.telefone}</td>
      <td>{pessoa.rua}</td>
      
      <td>{pessoa.cep}</td>
      <td>{pessoa.numero}</td>
      

  </tr>
  
  })



        }
        
        
        
        
          
          
        
                
      </tbody>
    </Table>
    <div className="text-center">
       <Link to="/pessoa" className="mx-auto">
        <Button >Cadastrar Nova Pessoa</Button>
      </Link>
    </div>
        </Pagina>
        
        )



}
import Pagina from "../../Modelo/Pagina";
import {Table,Button,Modal,Form,Row} from 'react-bootstrap'
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";



export default function Reg_atividade(props)
{
   const [descricao,setDescricao] = useState(''),
    [prioridade,setPrioridade] = useState(''),
    [tempoMedio,setTempoMedio] = useState(''),
    [id,setID] = useState('')
   
    
  const [lista,setLista] =  useState([
    {
      id: "",
      descricao:  "",
    prioridade:  "",
    tempoMedio:  ""
      
    }])
    const [exib,setExib]= useState([])
    

function excluir(e)
{
  
 const id = e.currentTarget.value
  fetch('http://localhost:4000/atividade/id', {
        method: "DELETE",
        body: JSON.stringify({id}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err.message));

      carregar()
      carregar()
}


function setarInformacao(e,atividade)
{
   
    
    setDescricao(atividade.descricao)
    setPrioridade(atividade.prioridade)
    setTempoMedio(atividade.tempoMedio)
    setID(atividade.id)
    handleShow()
  

}

function alterar(e)
{
    
   fetch('http://localhost:4000/atividade', {
    method: "PUT",
    body: JSON.stringify({id,descricao,prioridade,tempoMedio}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err.message));
  handleClose()
  carregar()
}


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const [validated, setValidated] = useState(false);

function carregar()
{
   fetch('http://localhost:4000/atividade', {
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
  



    const handleSubmit = (event) => {
        const form = event.currentTarget; 
        if (form.checkValidity() === false) {
            
          event.preventDefault();
          event.stopPropagation();

          
        }else
        {
            event.preventDefault();
            alterar()
           
        }
        
        setValidated(true);
        
        
      };

function transformaEmPalavra(s)
{//Baixa Media alta urgente
        if(s == 1)
        return "baixa"
        if(s == 2)
        return "media"
        if(s == 3)
        return "alta"
        if(s == 4)
        return "urgente"

}

    return(
        <Pagina>
          <p className="text-center">Registros de Atividadees</p>
            <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>id</th>
          <th>descrição</th>
          <th>prioridade</th>
          <th>Tempo Medio</th>
          <th>Excluir</th>
          <th>Alterar</th>
         
          
        </tr>
      </thead>
      <tbody>
        {

         

        lista.map((atividade) =>{
        return <tr key={atividade.id}>
            <td>{atividade.id}</td>
            <td className="col">{atividade.descricao}</td>
            <td>{transformaEmPalavra(atividade.prioridade)}</td>
            <td >{atividade.tempoMedio}</td>
            <td className="text-center"><Button value={atividade.id} onClick={ e =>{excluir(e)}}> Excluir</Button></td>
            <td className="text-center"><Button  onClick={ e =>{setarInformacao(e,atividade)}}> Alterar</Button></td>
            
            
        </tr>
        
        })



        }
        
        
        
        
          
          
        
                
      </tbody>
    </Table>
    <div className="text-center">
       <Link to="/atividadecamareira" className="mx-auto">
        <Button >Cadastrar Novo Atividade</Button>
      </Link>
    </div>

    <Modal show={show} onHide={handleClose} className="text-light">
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title>Alterar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
            
          <p className="display-6 text-center">ID: {id}</p>
          
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            <Row>
             <Form.Group className="mb-3 col-7" controlId="" >
               <Form.Label>Descrição </Form.Label>
               <Form.Control as="textarea" value={descricao} placeholder="Detalhes sobre o tipo de serviço" rows="10" required 
              onChange={e => setDescricao(e.target.value)} />
                 <Form.Control.Feedback type="invalid"  >
                         Escreva algo
                 </Form.Control.Feedback>
             </Form.Group>
           
             
 
 
                 <Row className="col">
                 <Form.Group className="mb-3 col-12 mx-auto" controlId="" >
                     <Form.Label>Prioridade</Form.Label>
                     <Form.Select className="text-right" value={prioridade} onChange={e => setPrioridade(e.target.value)}  id="setor"  required>
                     <option value="">Selecione</option>
                 <option value="1">1 - Baixa</option>
                 <option value="2">2 - Media</option>
                 <option value="3">3 - Alta</option>
                 <option value="4">4 - Urgente</option>
                 </Form.Select>
                 <Form.Control.Feedback type="invalid"  >
                     Selecione uma Prioridade
                     </Form.Control.Feedback>
                 </Form.Group>
 
                 <Form.Group className="mb-3 col-12 mx-auto" controlId="" >
                 <Form.Label>Tempo Medio  ( minutos )</Form.Label>
                 <Form.Control type="number" min="1" value={tempoMedio} required onChange={e => setTempoMedio(e.target.value)}  />
                 </Form.Group>
 
         
                  </Row>
             
             </Row>
            
            
        <Row><div className="col-1"></div>
          <Button variant="secondary col-2 border  text-center" onClick={handleClose}>
            Fechar
          </Button>
          <div className="col-5"></div>
           <Button variant="primary border col-3 " type="submit" >
            Alterar
          </Button>
        </Row>


</Form>
          
        </Modal.Body>
        
      </Modal>

     


      

      

      
        </Pagina>
        )


}



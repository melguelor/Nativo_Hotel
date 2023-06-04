import Pagina from "../../Modelo/Pagina";
import{Table,Button,Modal,Form,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import CaixaSelecao from '../../Modelo/CaixaSelecao'
import CarrinhoConsumo from "../CarrinhoConsumo";


export default function Reg_reserva()
{
/*
    #id
    #dataEntrada
    #quarto
    #qtdePessoa
    #idHospede

    o nome do hospede vem de outra tabela onde na parte da parsistencia pega essa informação
*/


const [idReserva, setIdReserva] = useState('');
const [dataEntrada, setDataEntrada] = useState('');
const [quarto, setQuarto] = useState('');
const [qtdePessoa, setQtdePessoa] = useState('');
const [nome, setNome] = useState('');
const [idHospede,setIdHospede] = useState()





const [lista, setLista] = useState([
  {
    id: "",
    dataEntrada: "",
    quarto: "",
    qtdePessoa: "",
    idHospede: ""
  }
]);

const [listaHospede,setListaHospede] = useState([
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





function excluir(e) {
  const id = e.currentTarget.value;

  fetch(`http://localhost:4000/reserva/`, {
    method: "DELETE",
    body: JSON.stringify({     id }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err.message));

    carregar();

  
}

function consultarTodos()
{
  fetch('http://localhost:4000/pessoa', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => setListaHospede(json))
      .catch(err => console.log(err));
 

 return listaHospede
  
}


function alterar(e) {
  fetch(`http://localhost:4000/reserva/`, {
    method: "PUT",
    body: JSON.stringify({
      id: idReserva,
      dataEntrada,
      quarto,
      qtdePessoa,
      nome
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err.message));

 
}

function carregar()
{
  consultarTodos()
   fetch('http://localhost:4000/reserva', {
    method: "GET",
    headers: {"Content-type": "application/json;charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => setLista(json))
  .catch(err => console.log(err));
}

useEffect (() => {
  carregar();


 
}, []);

const meuEstado = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo'
};



function selecionaReserva(e)
{    
  const objetoString = JSON.stringify(e);
 console.log(objetoString)
 

  // Armazenando a string no localStorage
  //localStorage.setItem('reservaLocal', objetoString);

  //const id = e.currentTarget.value;



}




const [show, setShow] = useState(true);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return(

        <Pagina>
            <p className="text-center">Registros de Pessoas</p>
             <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr className="text-center">
          <th>Nome Hospede</th>
          <th>data De Entrada</th>
          <th>Quarto</th>
          <th>Num Pessoas</th>
          <th>Adicionar Consumo</th>
          <th>Excluir</th>
          <th>Alterar</th>
          
         
        </tr>
      </thead>
      <tbody>
{
  lista.map((reserva) =>{
    return <tr key={reserva.id}>
        <td>{reserva.idHospede}</td>
        <td>{reserva.dataEntrada}</td>
        <td>{reserva.quarto}</td>
        <td>{reserva.qtdePessoa}</td>

        <td className="text-center">
         
          <Link to={"/carrinhoconsumo"   }
          
          state={reserva}
          
          
          
          >Ir para outra página</Link>
          
          
        
        </td>
        <td className="text-center"><Button value={reserva.id} onClick={ e =>{excluir(e)}}> Excluir</Button></td>
        <td className="text-center"><Button  > Alterar</Button></td>
            
        
  
    </tr>
    
    })
}


       
        
        
        
        
          
          
        
                
      </ tbody>
    </Table>
    <div className="text-center">
       <Link to="/reserva" className="mx-auto">
        <Button >Cadastrar Nova Reserva</Button>
      </Link>
    </div>



    <Modal show={show} onHide={handleClose} className="text-light">
  <Modal.Header closeButton className="bg-secondary">
    <Modal.Title>Alterar</Modal.Title>
  </Modal.Header>
  <Modal.Body className="bg-secondary">
    <Row>
    <CaixaSelecao fonte={listaHospede }
                  campoExibir={'nome'}
                  chave="id"/>
    </Row>


    <p className="display-6 text-center">ID: {}</p>
    <Form >
      <Row>
        <Form.Group className="mb-3 col-7" controlId="">
          <Form.Label>Data de Entrada</Form.Label>
          <Form.Control
            type="text"
            value={dataEntrada}
            onChange={(e) => setDataEntrada(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-7" controlId="">
          <Form.Label>Quarto</Form.Label>
          <Form.Control
            type="text"
            value={quarto}
            onChange={(e) => setQuarto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-7" controlId="">
          <Form.Label>Quantidade de Pessoas</Form.Label>
          <Form.Control
            type="text"
            value={qtdePessoa}
            onChange={(e) => setQtdePessoa(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-7" controlId="">
          <Form.Label>ID do Hóspede</Form.Label>
          <Form.Control
            type="text"
            value={idHospede}
            onChange={(e) => setIdHospede(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row>
        <div className="col-1"></div>
        <Button variant="secondary col-2 border text-center" onClick={handleClose}>
          Fechar
        </Button>
        <div className="col-5"></div>
        <Button variant="primary border col-3" type="submit">
          Alterar
        </Button>
      </Row>
    </Form>
  </Modal.Body>
</Modal>








        </Pagina>
    );



}
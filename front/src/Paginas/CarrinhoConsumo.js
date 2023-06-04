

import Pagina from "../Modelo/Pagina";
import {Link, useLocation} from 'react-router-dom'
import { useState,useEffect } from "react"
import {Form,Row,Button,Modal,InputGroup,Col,Card,Table,FormControl} from 'react-bootstrap'
import CaixaSelecao from "../Modelo/CaixaSelecao";

const valor = 
[
    {
        "id":"1",
        "nome": "Victor"
    },
    
    {
        "id":"2",
        "nome": "Leandro"
    },

]

export default function CarrinhoConsumo(props)
{

    const local = useLocation()
   const reserva =  useLocation().state
   
   
   const getClasse = document.getElementsByTagName('Pagina')




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

  function carregar()
    {
       fetch('http://localhost:4000/pessoa/', {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        
        setLista(json.filter((item)=>{
            return item.nome === reserva.idHospede
        }))
        
        console.log(lista)
    
    })
      .catch(err => console.log(err));
    }
        useEffect (() => {
          carregar();
          
          
        }, []);

 let pessoa = lista[0]


   const [listaProdutos,setListaProdutos] = useState([
  {  
    id: "", 
    nome:  "2",
    valorUnitario:  "",
    data: "",
    valorUnitario: ""
  },
  
   
   ])

  
 
   const [quantidade, setQuantidade] = useState(1);
   const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };





    return(
        <>
        <Pagina coluna="col">
       
        <p className="text-center">Carrinho de Consumo</p>

        <Row className=" mx-auto text-center">
            <Col className="col">
        <Card  border={true}  className=" small">
                <Card.Header className="border">
                    <Card.Title className="text-center text-uppercase font-weight-bold">
                        Dados da reserva
                    </Card.Title>
                </Card.Header>

                <Card.Body className="border ">
                    <ul className="list-unstyled ">
                        
                    
                    <li><strong>Identificador:<br /></strong> {reserva.id}</li>
                    <li><strong>Data Entrada:<br /></strong> {reserva.dataEntrada}</li>
                    <li><strong>Quarto:<br /></strong> {reserva.quarto}</li>
                    <li><strong>Quantidade Pessoas:<br /></strong> {reserva.qtdePessoa}</li>
                    </ul>
                </Card.Body>

        </Card>
</Col>

<Col className="col-8 ">
    <Row className="p-3 "></Row>
        <Card  border={true}  className="small">
                <Card.Header className="border">
                    <Card.Title className="text-left text-uppercase font-weight-bold">
                        Dados do Hospode
                    </Card.Title>
                </Card.Header>

                <Card.Body className="border ">
                    <Row>
                        <Col>
                        <p>
                        <strong>Nome:<br /></strong> {pessoa.nome}
                        </p>
                        </Col>

                        <Col>
                       <p>
                        <strong>CPF:<br /></strong> {pessoa.cpf}
                        </p>
                        </Col>

                        <Col>
                        <p>
                        <strong>Telefone:<br /></strong> {pessoa.telefone}
                        </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <p>
                        <strong>Rua:<br /></strong> {pessoa.rua}
                        </p>
                        </Col>

                        <Col>
                        <p>
                        <strong>CEP:<br /></strong> {pessoa.cep}
                        </p>
                        </Col>

                        <Col>
                        <p>
                        <strong>Numero:<br /></strong> {pessoa.numero}
                        </p>
                        </Col>
                    </Row>
                </Card.Body>

        </Card>
</Col>
   
        
        </Row>
        <Row className="col-9 mx-auto mt-4">
        <Card  border={true}  className="small">
                <Card.Header className="border">
                    <Card.Title className="text-center text-uppercase font-weight-bold">
                        Adicionar produto
                    </Card.Title>
                </Card.Header>

                <Card.Body className="border ">
                    <Col className="col-5 mx-auto">
                    <CaixaSelecao 
                    fonte={valor}  
                    campoExibir={'s'}  
                     chave={'s'} 
                     nomeLabel={"Selecionar Produto"}
                    />
                    </Col>

                    <Col className="col mx-auto">
                    <Form.Group>
                       <Row>
                         <Col className="col-7"> 
                         <Form.Label>Nome</Form.Label>
                          <Form.Control />
                        </Col>
                        
                        <Col className="col-2">
                            <Form.Label>Quantidade</Form.Label>
                            <InputGroup className="col text-center">
                                <Button variant="primary"  onClick={diminuirQuantidade}>-</Button>
                                
                                <FormControl placeholder="1" className="text-center" type="number" value={quantidade} readOnly />
                                
                                <Button variant="primary" onClick={aumentarQuantidade}>+</Button>
                            </InputGroup>
                        </Col>
                       
                        



                        <Col className="col-3"> 
                          <Form.Label>Valor Unitario</Form.Label>
                          <Form.Control value={1}/>
                        </Col>

                        
                       </Row>
                      
                        <Row className="col-4 mx-auto m-2">
                        <Card  border={true}  className="small ">
                <Card.Header className="border">
                    <Card.Title className="text-center text-uppercase font-weight-bold">
                        Valor Total
                    </Card.Title>
                </Card.Header>

                <Card.Body className="border ">
                    <p className="text-center h1">R$ 42.822,90</p>
                    
                    
                </Card.Body>

        </Card>
                        </Row>
                        

                        
                    </Form.Group>
                    
                    </Col>
                </Card.Body>

        </Card> </Row>
        <Row>

        </Row>

        <Row className="col-12 mx-auto text-center mt-5">
            


            <Table striped bordered hover variant="dark" size="sm">
      <thead>
      <tr >
        <th colspan="11" className="h1">TABELA DE ITENS PARA ADICIONAR A RESERVA</th>
      </tr>
        <tr>
          <th>id</th>
          <th>nome</th>
          <th>Data</th>
          <th>quantidade</th>
          <th>valor Unitario</th>
          
          <th>Valor Total</th>
          <th>Remover</th>
          <th>Adicionar </th>
          
         
          
        </tr>
      </thead>
      <tbody>

    {listaProdutos.map((produto)=>{
    console.log('a')
            return  <tr >
            <td>s</td>
            <td>s</td>
            <td>s</td>
            <td>s</td>
            <td>s</td>
            <td>s</td>
            <td>-</td>
            <td>+</td>
            
       

        
            
        
  
        </tr>


    })}
        
    
   

      </tbody>
      </Table>
        </Row>















        </Pagina>
    
        
        
        </>
        )
}
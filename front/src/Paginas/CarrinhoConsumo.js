

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
        
        //console.log(lista)
    
    })
      .catch(err => console.log(err));
    }
        useEffect (() => {
          carregar();
          carregarSelecao();
          
        }, []);

 let pessoa = lista[0]


   const [listaProdutos,setListaProdutos] = useState([
  {  
    id:"", 
    nome:"",
     data:"",
     quantidade:"",
    valorUnitario:"",
    ValorTotal:0
    
  }
  
   
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

/*
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


*/


 const [listagem,setListagem] = useState([
    {id:"",
     nome:"",
     valor:""
    }
 ])



  function carregarSelecao()
  {
     fetch('http://localhost:4000/produto/', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
      
        setListagem(json)
       
  })
    .catch(err => console.log(err));
  }


 const [temporario,setTemporario] = useState({})




 function addLista()
 {
    /* const novalista = listaProdutos.push(
        { id:6, 
        nome:"",
         data:"",
         quantidade:2,
        valorUnitario:"",
        ValorTotal:0}
    ) 

    setListaProdutos([novalista])*/
    const novoProduto = {
        id: temporario.id,
        nome: temporario.nome,
        data: '01/01/2022',
        quantidade: temporario.quantidade,
        valorUnitario: temporario.valor,
        ValorTotal:22
        
    };

   listaProdutos.push(novoProduto);
        const tabela = document.querySelector('#tabela');
        const conteudoHTML = listaProdutos.map((produto) => `
            <tr>
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.data}</td>
                <td>${produto.quantidade}</td>
                <td>${produto.valorUnitario}</td>
                <td>${produto.quantidade * produto.valorUnitario}</td>
                
            </tr>
        `).join('');
        tabela.innerHTML = conteudoHTML;
    

   


    
 
           

           

 }


 function listarTabela()
 {
    const tabela = document.querySelector('#tabela')
    
    let conteudoHTML = `
    ${listaProdutos.map((produto) => `
        <tr>
            <td>${produto.nome}</td>
            <td>${produto.data}</td>
            <td>${produto.quantidade}</td>
            <td>${produto.valorUnitario}</td>
            <td>${produto.quantidade * produto.valorUnitario}</td>
            <td><Button>-</Button></td>
            <td><Button>+</Button></td>
        </tr>
    `).join('')}
`;
tabela.innerHTML = conteudoHTML
   
    console.log(tabela)
       /* 
       
       {
       listaProdutos.map((produto)=>{

            return <tr >
          
           <td>{produto.nome}</td>
           <td>{produto.data}</td>
           <td>{produto.quantidade}</td>
           <td>{produto.valorUnitario}</td>
           <td>{produto.ValorTotal = produto.quantidade * produto.valorUnitario}</td>
           <td><Button>-</Button></td>
           <td><Button>+</Button></td>
           
       
       
       
           
       
       
       </tr>
       
       
       })}*/
    


 } 






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
                    fonte={listagem}  
                    campoExibir={'nome'}  
                     chave={'id'} 
                     nomeLabel={"Selecionar Produto"}
                     funcaoSelecao={setTemporario}

                    />
                    </Col>

                    <Col className="col mx-auto">
                    <Form.Group>
                       <Row>
                         <Col className="col-7"> 
                         <Form.Label>Nome</Form.Label>
                          <Form.Control value={temporario.nome}  />
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
                          <Form.Control value={temporario.valor * quantidade}/>
                        </Col>
                        <Col className="mx-auto p-2 text-center col-3">
                        <Button
                            onClick={addLista}
                        >
                            Adicionar Produto a Lista
                        </Button>
                        </Col>
                       
                        
                       </Row>
                      
                        <Row className="col-5 mx-auto m-2">
                        <Card  border={true}  className="small ">
                <Card.Header className="border">
                    <Card.Title className="text-center text-uppercase font-weight-bold">
                        Valor Total da Tabela
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
          
          
         
          
        </tr>
      </thead>
      <tbody id="tabela">
         
        
    
   

      </tbody>
      </Table>
       
        </Row>

        <Row className="mx-auto col-2"><Button>Salvar</Button></Row>















        </Pagina>
    
        
        
        </>
        )
}
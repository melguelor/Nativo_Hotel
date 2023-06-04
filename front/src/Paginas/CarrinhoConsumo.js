

import Pagina from "../Modelo/Pagina";
import {Link, useLocation} from 'react-router-dom'
import { useState,useEffect } from "react"
import {Form,Row,Button,Modal,InputGroup,Col,Card,Table,FormControl} from 'react-bootstrap'
import CaixaSelecao from "../Modelo/CaixaSelecao";



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

 const [total,setTotal] = useState(0)


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


 const [temporario,setTemporario] = useState({valor:0})




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
//AQUI ESTOU GERANDO UM OBJETO PARA INSERIR NA TABELA
    
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1; 
    const ano = dataAtual.getFullYear(); 
    
   
    
    //vou utilizar esse novo produto como forma de enviar ao back end a tabela com todos os campos necessario
    /*
    novoProduto será responsavel por salvar os dados da tabela + a chave estrangeria da reserva e qual hospede está
    já que pode ter outra tabela se o hospede fizer outra reserva

    importante: não vou salvar o valor total de todos os produtos, pois acredito que um sql caso seja necesario
    fara o serviço do que abrir mais uma coluna com o valor total totalmente replicado ou fazer uma tabela só para isso
    quando é melhor apenas uma consulta no sql 

    id, nomeProduto,dataPedida,qtde,valorUnitario,idHospede,idReserva
    */
    setTotal((total + (quantidade * temporario.valor)))
    
    const novoProduto = {
        id: temporario.id,
        nome: temporario.nome,
        data:  dia +"/"+ mes +"/"+ ano,
        quantidade: quantidade,
        valorUnitario: temporario.valor,
        ValorTotal: quantidade * temporario.valor
        
    };


   
   listaProdutos.push(novoProduto);

//ESTOU APENAS MOSTRANDO OS VALORES ATUALIZANDO A TABELA JÁ ADICIONADA NO FUNDO
        const tabela = document.querySelector('#tabela');
        const conteudoHTML = listaProdutos.map((produto) => `
            <tr>
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.data }</td>
                <td>${produto.quantidade}</td>
                <td>${produto.valorUnitario}</td>
                <td>${produto.ValorTotal}</td>
                
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
                          <Form.Control value={(temporario.valor * quantidade)}/>
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
                    <p className="text-center h1"> R$ {total.toFixed(2)}</p>
                    
                    
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
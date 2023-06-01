import Pagina from "../../Modelo/Pagina";
import BarraBusca from "../../Modelo/BarraBusca"
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react"
import {Form,Row,Button,Modal,InputGroup,Col, Card} from 'react-bootstrap'


const listaCliente = [
    {cpf:"111.222.333-33",
      nome:'Victor'},
    {cpf:"222.222.333-33",
    nome:'Rewgli'}
  ]




export default function Reserva(props)
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
        const [clienteSelecionado,setClienteSelecionado] = useState({})
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

   const [data,setData] = useState(''),
        [quarto,setQuarto] = useState(''),
        [qtdePessoa,setQtdePessoa] = useState(1),
        [idHospede,setIdHospede] = useState()



    useEffect (() => {
        carregar();

        
        const data = new Date().toLocaleString()
         
        setData( data)

       
      }, []);



  const handleSubmit = (event) =>
  {
      event.preventDefault()

      console.log("Asasasasaa")
    fetch('http://localhost:4000/reserva', {
        method: "POST",
        body: JSON.stringify({data, quarto, qtdePessoa,idHospede:clienteSelecionado.id} ),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err.message));
  }
    
 







    return(
        <>
        <Pagina><p className="text-center">Reserva</p>
       
            <Link to="/reg_reserva"className="d-flex justify-content-center mb-3">
                <Button type="submit"  >
                    Consultar Reservas
                </Button>
            </Link>
        

            <Form onSubmit={handleSubmit}>  
                    
           
            
               
            <Card border={true} className="mx-auto col-9 text-center p-4 mb-5 ">
                <Card.Header className="border">
                    <Card.Title className="text-center text-uppercase font-weight-bold">Informações do Hospede Buscado</Card.Title>
                </Card.Header>

                <Card.Body className="border">
                    <p>Nome:<b> {quarto}</b> </p>
                    <p>CPF: <b>{clienteSelecionado.cpf}</b></p>
                    <p>Telefone: <b> {clienteSelecionado.telefone} </b></p>
                    <p>Rua: <b> {clienteSelecionado.rua} </b></p>
                    <p>CEP:<b>  {clienteSelecionado.cep}</b> </p>
                    <p>Numero:<b>  {clienteSelecionado.numero}</b> </p>
                </Card.Body>
            </Card>


            <BarraBusca
        placeholder={'Informe o nome do hospede'}
        dados={lista}
        campoChave={"id"}
        campoBusca={"nome"}
        funcaoSelecao={setClienteSelecionado}
        valor={""}
       
          
       
       />






                
                
                <Row className=" mx-auto pt-3">
                    <Col>
                <Form.Group>
                    <Form.Label>Data de Entrada</Form.Label>
                    <Form.Control value={data}/>
                </Form.Group>

        



                </Col>
                
                <Col>
                
                <Form.Group  >
                    <Form.Label>Quarto</Form.Label>
                    <Form.Select className="text-center" 
                    onChange={(e)=> setQuarto(e.target.value)}
                    >
                    <option value="">Selecione</option>
                <option value="Basico">Basico</option>
                <option value="Standart">Standart</option>
                <option value="Luxo">Luxo</option>
                </Form.Select>
               
                </Form.Group>




                </Col>
                



                <Col>
                    <Form.Group>
                        <Form.Label>Qtde de Pessoas</Form.Label>
                        <Form.Control onChange={(e)=> setQtdePessoa(e.target.value)}/>
                    </Form.Group>
                </Col>
                </Row>

                <div className="text-center m-4">

        <Button type="submit"  to="/">Cadastrar Reserva</Button>
        

      </div>
            </Form>
        
    
        </Pagina>
        
        </>
        )
}
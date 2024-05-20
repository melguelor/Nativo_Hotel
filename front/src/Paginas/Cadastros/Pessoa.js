import Pagina from "../../Modelo/Pagina";
import {Link} from 'react-router-dom'
import { useState } from "react"
import {Form,Row,Button,Modal,InputGroup,Col} from 'react-bootstrap'







export default function Pessoa(props)
{
    let formulario = document.getElementById('Form_PreCadastro'),
    [nome,setNome] = useState(''),
    [tipo,setTipo] = useState(''),
    [telefone,setTelefone] = useState(''),
    [cpf,setCPF] = useState(''),
    [senha,setSenha] = useState(''),
    
    [rua,setRua] = useState(''),
    [numero,setNumero] = useState(''),
    [cep,setCep] = useState('')
    





  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        
      event.preventDefault();
      event.stopPropagation();
    }else
    {
        event.preventDefault();
        fetch('http://localhost:4000/pessoa', {
        method: "POST",
        body: JSON.stringify({nome , telefone , cpf , rua , cep ,numero,tipo}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err.message));
        handleShow()
    }
    
    setValidated(true);
    
    
  };







    return(
        <>
        <Pagina>
       

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <p className="text-center">Cadastro</p>
            <Row className="text-center mx-auto">
            <Form.Group className="mb-3 col-4 mx-auto" controlId="" >
                    <Form.Label>Tipo do Cadastro</Form.Label>
                    <Form.Select className="text-center" id="setor"
                    onChange={(e)=> setTipo(e.target.value)} required>
                    <option value="">Selecione</option>
                <option value="Hospede">Hospede</option>
                <option value="Funcionario">Funcionario</option>
                <option value="Fornecedor">Fornecedor</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid"  >
                    Selecione um tipo
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>



        <Row  >
        <Form.Group className="mb-3 col-12 " >
        <Form.Label>Nome </Form.Label>
        <Form.Control type="text"  placeholder="Digite o nome completo" id="nome"
        onChange={e => setNome(e.target.value)} required />
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
      </Form.Group>

      
      

      <Form.Group className="mb-3 col-3" >
        <Form.Label>CNPJ/CPF</Form.Label>
        <Form.Control type="text" className="text-center" maxLength={11} placeholder="XXX.XXX.XXX-XX" id="cnpj"  
        onChange={e => setCPF(e.target.value)} required/>
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3 col-3" >
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="text" className="text-center"maxLength={11} placeholder="(XX)XXXXX-XXXX" id="telefone"  
        onChange={e => setTelefone(e.target.value)} required/>
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
      </Form.Group>

      <Row className="col border m-4">
        <p className="">Endereço</p>

        <Form.Group >
        <Form.Control  id="rua" className="m-1" placeholder="Rua"
        onChange={e => setRua(e.target.value)} required/>
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
        </Form.Group>


        <Form.Group >
        <Form.Control className="m-1" id="cep"  placeholder="CEP"
        onChange={e => setCep(e.target.value)} required/>
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
        </Form.Group>
        

        <Form.Group >
        <Form.Control className="m-1" id="numero"  placeholder="Numero"
        onChange={e => setNumero(e.target.value)} required/>
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
        </Form.Group>
<Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
      </Row>
      <p className="">Senha</p>
      <Form.Group className="mb-3 col-5 center">
        <Form.Control className="m-1" id="senha"  placeholder="Digite sua senha"
        onChange={e => setSenha(e.target.value)} required/>
        <Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>
        </Form.Group>
<Form.Control.Feedback type="invalid"  >
                    Campo Obrigatorio
        </Form.Control.Feedback>

      
      <div className="text-center">

        <Button type="submit"  to="/">Cadastrar Pessoa</Button>
        

      </div>
      
        </Row>
        </Form>



        <Modal show={show} onHide={handleClose} className="text-light">
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title>{tipo} gravado com sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          <p>Nome:<b> {nome}</b> </p>
          
          <p>CPF: <b>{cpf}</b></p>
          <p>Telefone: <b> {telefone} </b></p>
          <p>Rua: <b> {rua} </b></p>
          <p>CEP:<b>  {cep}</b> </p>
          <p>Numero:<b>  {numero}</b> </p>
          
        </Modal.Body>
        <Modal.Footer className="bg-secondary">
          <Button variant="secondary border" onClick={handleClose}>
            Fechar
          </Button>
          <Link to="/reserva">
          <Button variant="primary border" onClick={handleClose}>
            Vá Para Registros
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
        
    
        </Pagina>
        
        </>
        )
}


import Pagina from "../Modelo/Pagina";
import {Link, useLocation} from 'react-router-dom'
import { useState,useEffect } from "react"
import {Form,Row,Button,Modal,InputGroup,Col,Card,Table,FormControl} from 'react-bootstrap'
import CaixaSelecao from "../Modelo/CaixaSelecao";



export default function Login(props)
{
  const [login,setLogin]  = useState(''),
        [senha,setSenha]  = useState('')
    
  function logar()
    {
      localStorage.setItem('login', "");
       fetch(`http://localhost:4000/login/${login}/${senha}`, {
        method: "GET", 
        
        headers: {"Content-type": "application/json;charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => {
        if (json && login && senha) {
          
          if (json.login === login && json.senha === senha) {
            localStorage.setItem('login', '');
            localStorage.setItem('login', login);
            setLogin(login)
            handleClose();

          } else {
            console.log('Falha na autenticação: login ou senha incorretos');
          }
        } else {
          console.error('Erro: Entrada inválida. Verifique se os dados estão corretos');
        }

      })
      .catch(err => console.log(err));

     
    }
        



  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(

        <>
        
       
      
       
        <Modal show={show} onHide={handleClose} className="text-light">
      <Modal.Header closeButton className="bg-secondary">
        <Modal.Title>Logar no Sistema</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark">
        <Form>
          {login}
          <Form.Group controlId="formLogin">
            <Form.Label>Logar no Sistema</Form.Label>
            <Form.Control type="text" placeholder="Insira seu login" value={login} onChange={e => setLogin(e.target.value) } />
          </Form.Group>
          <Form.Group controlId="formSenha" className="mt-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Insira sua senha" value={senha} onChange={e => setSenha(e.target.value) }/>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="bg-secondary">
      <Link to="/cadastros" >
        <Button variant="secondary border" onClick={handleClose}>
          Cadastrar
        </Button></Link>
        <Button variant="primary border" onClick={logar}>
          Logar
        </Button>
      </Modal.Footer>
    </Modal>
        
        
    
        </>
        
        
        )
}
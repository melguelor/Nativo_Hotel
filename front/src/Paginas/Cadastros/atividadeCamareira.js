import Pagina from "../../Modelo/Pagina";
import {Link} from 'react-router-dom'
import { useState } from "react"
import {Form,Row,Button,Modal,InputGroup,Col} from 'react-bootstrap'


export default function Pessoa(props)
{
    let formulario = document.getElementById('Form_PreCadastro'),
    [descricao,setDescricao] = useState(''),
    [prioridade,setPrioridade] = useState(''),
    [tempoMedio,setTempoMedio] = useState(5)
 
   const id= 2
    
   
    





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
      console.log()
        event.preventDefault();
        fetch('http://localhost:4000/atividade', {
        method: "POST",
        body: JSON.stringify({descricao,prioridade,tempoMedio}),
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
       
        <p className="text-center">Cadastro da Atividade da Camareira</p>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            
           <Row>
            <Form.Group className="mb-3 col-9" controlId="" >
              <Form.Label>Descrição </Form.Label>
              <Form.Control as="textarea" placeholder="Detalhes sobre o tipo de serviço" rows="10" required
              onChange={e => setDescricao(e.target.value)} />
                <Form.Control.Feedback type="invalid"  >
                        Escreva algo
                </Form.Control.Feedback>
            </Form.Group>
          
            


                <Row className="col-3">
                <Form.Group className="mb-3 col mx-auto" controlId="" >
                    <Form.Label>Prioridade</Form.Label>
                    <Form.Select className="text-right" id="setor"  required
                    onChange={e => setPrioridade(e.target.value)}>
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

                <Form.Group className="mb-3 col mx-auto" controlId="" >
                <Form.Label>Tempo Medio <p> ( minutos )</p></Form.Label>
                <Form.Control type="number" min="1" value={tempoMedio} required         onChange={e => setTempoMedio(e.target.value)} />
                <Form.Control.Feedback type="invalid"  >
                    Valor tem que ser maior que 1
                    </Form.Control.Feedback>
                
                </Form.Group>

        
                 </Row>
            
            </Row>
            <div className="text-center">

        <Button type="submit"  to="/">Cadastrar Atividade</Button>
        

      </div>
        </Form>


        <Modal show={show} onHide={handleClose} className="text-light">
        <Modal.Header closeButton className="bg-secondary">
          <Modal.Title>Atividade Camareira Gravado com Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary">
          
          
        </Modal.Body>
        <Modal.Footer className="bg-secondary">
          <Button variant="secondary border" onClick={handleClose}>
            Fechar
          </Button>
          <Link to="/reg_atividade">
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
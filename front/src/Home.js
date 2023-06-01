import Menu from "./Modelo/Menu"
import Pagina from "./Modelo/Pagina"
import { Button, Form, Modal } from "react-bootstrap"
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Home(props)
{
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
        return(<>
            <Pagina>
                
           
            
            </Pagina>


<Modal show={show} onHide={handleClose} className="text-light">
        
        
        <Modal.Footer className="bg-secondary">
          <Button variant="secondary border" onClick={handleClose}>
            Fechar
          </Button>
          <Link to="/cadastros">
          <Button variant="primary border" onClick={handleClose}>
            Vá para tela de Cadastros
          </Button>
          </Link>
        </Modal.Footer>
      </Modal>
            </>)
}
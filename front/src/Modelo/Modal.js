import { Modal } from "react-bootstrap";


/*
Será o futuro modelo dos modal do sistema inteiro 
onde atraves das propriedades será chamado e será dinamico
AINDA NÃO EM USO
*/

export default Modal(props)
{
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

        
        )


}
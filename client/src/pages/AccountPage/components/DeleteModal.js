import { Alert, Button, Modal } from "react-bootstrap";

export default function DeleteModal({ isOpen, close }) {

    const handleDelete = () =>{
        
    }

  return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title> Eliminar Cuenta </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

            <Alert variant='danger'>
                ¿Estas seguro que desas eliminar permanentemente tu cuenta? <b>Se perderan tus datos.</b>
            </Alert>

        </Modal.Body>

        <Modal.Footer>

            <Button variant='secondary' onClick={close}>Cancelar</Button>
            <Button variant='danger'>Eliminar Cuenta</Button>

        </Modal.Footer>
    </Modal>
  )
}

import { useEffect } from 'react'
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ChangePasswordResolver from "../../../validations/ChangePasswordResolver";

export default function EditarModal({ isOpen, close }) {
    const { register, handleSubmit, formState:{errors}, reset } = useForm({resolver: ChangePasswordResolver});

    const onSubmit = (formData) =>{
        alert("contraseña cambiada")
    }

    useEffect(() => {
        if(!isOpen){
            reset()
        }
    }, [isOpen])

  return (
    <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title> Editar Cuenta </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Nueva Comtraseña</Form.Label>

                    <Form.Control
                        Type='password'
                        placeholder="Escribe una nueva contraseña"
                        {...register('password')}
                    />

                    {errors?.password && (
                        <Form.Text>
                            <Alert variant='danger'>
                                {errors.password.message}
                            </Alert>
                        </Form.Text>
                    )}
                    
                </Form.Group>
            </Form>

        </Modal.Body>

        <Modal.Footer>

            <Button variant='secondary' onClick={close}>Cancelar</Button>
            <Button variant='primary' onClick={handleSubmit(onSubmit)}>Actualizar Cuenta</Button>

        </Modal.Footer>
    </Modal>
  )
}

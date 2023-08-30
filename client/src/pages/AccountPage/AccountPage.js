import { Container, Row, Col, Card, Button} from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import DeleteModal from "./components/DeleteModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import useModal from "../../helpers/useModal";
import EditarModal from "./components/EditModal ";

export default function AccountPage() {
    const { user } = useAuth ();

    const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
    const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();
    const [isOpenEditModal, openEditModal, closeEditModal] = useModal();

    return (
        <>
            <Container>
                <Row className="mt-5"> 
                    <Col xs={12} className='text-center'>
                        <img 
                            src='/img/images (1).jpg'
                            alt='profile'
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }}
                        />
                    </Col>
                    <Col className='mt-4' >
                        <Card style={{maxWidth: '360px'}} className='mx-auto p-4'>
                            <p className='text-center' ><b>Nombre:</b> {user.name}</p>
                            <p className='text-center' ><b>Email:</b> {user.email}</p>
                            <p className='text-center' ><b>Rol:</b> {user.role}</p>

                            <Button variant="warning" onClick={openEditModal}> Editar Cuenta</Button>
                            <Button variant="primary" clasName='mt-1' onClick={openChangePasswordModal}> Cambiar Contraseña</Button>
                            <Button variant="danger" clasName='mt-3' onClick={openDeleteModal}> Eliminar Cuenta</Button>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <DeleteModal
                isOpen = {isOpenDeleteModal}
                close = {closeDeleteModal}
            />

            <ChangePasswordModal
                isOpen = {isOpenChangePasswordModal}
                close = {closeChangePasswordModal}
            />

            <EditarModal
                isOpen = {isOpenEditModal}
                close = {closeEditModal}
            />
        </>
    )
}
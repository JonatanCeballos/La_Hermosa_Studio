import { Col, Container, Row, Button, Carousel } from "react-bootstrap";
import routes from "../routers/routes";
import { Link } from "react-router-dom";
import Banner from "../components/banner/banner";

export default function HomePage() {
    return (
        <>

        {/* Banner */}
        <Banner/>
        
        <Container>
            
            <Row className="mt-5"> 
                <Col xs={{ span: 12}} md={{ span: 6}} className='mb-5'>
                    <h2>Bienvenid@ al Gestor de Tareas</h2>
                    <p>Aqui podras gestionar tus proyectos!</p>
                    <p>
                        Marca tus tareas como terminadas, agregar,
                        eliminar o actualizar.
                    </p>
                    <div>
                        <Link to={routes.login}>Ingrese</Link> o 
                        <Button as={Link} to={routes.register} className='ms-1' >Crea una cuenta </Button>
                    </div>
                </Col>
                <Col>
                    <img 
                        className='img-fluid'
                        src='/img/gitarra.jpg' 
                        atl='guitarra-lista de tareas' />
                    <p>Gestiona tu Tiempo y movilidad</p>
                </Col>
            </Row>
        </Container>

        </>
    )
}
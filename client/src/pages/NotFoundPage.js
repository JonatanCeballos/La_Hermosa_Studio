import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import routes from '../routers/routes';

export default function NotFoundPage() {
    return (
        <Container>
            <Row className="mt-2"> 
                <Col md={{span: 8, offset:2}} className='text-center'>
                    <img
                        style={{width: '100%', height: '60%' }}
                        src='/img/error-404.jpg'
                        alt='Error404'
                    />

                    <h2>¿Te has Perdido?</h2>
                    <p>Esta pagina no ha sido encontrada, pero puedes volver al <Link to={routes.home}>inicio</Link></p>
                </Col>
            </Row>
        </Container>
    )
};
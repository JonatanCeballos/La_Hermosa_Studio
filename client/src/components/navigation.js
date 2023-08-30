
import { Navbar, Nav, NavDropdown } from  'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../routers/routes';
import useAuth from '../auth/useAuth';

export default function Navigation() {

	const { logout } = useAuth();

	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" >
			<Navbar.Brand as={NavLink} to={routes.home}> Task Manager </Navbar.Brand>

			<Navbar.Toggle aria-controls='responsive-navbar-nav' />

			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className="me-auto">
					<Nav.Link as={NavLink} to={routes.projects}>Proyectos</Nav.Link>
					
					<NavDropdown title="Admin">
						<NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
					</NavDropdown>
					
				</Nav>

				<Nav >
					<Nav.Link as={NavLink} to={routes.login}>Iniciar Seccion</Nav.Link>
					<Nav.Link as={NavLink} to={routes.register}>Registarse</Nav.Link>
					<Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
					<Nav.Link to={routes.account} onClick={logout} >Cerrar Sesion</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
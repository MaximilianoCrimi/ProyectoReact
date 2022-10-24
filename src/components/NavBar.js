import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './CartWidget';


function Navegacion() {
    return (
        <Navbar bg="warning" expand="lg">
            <Container className='.pe-6'>
                <Navbar.Brand href="#home">Dragon Ball Tienda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Manga</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Figuras
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Indumentaria</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Cart />
            </Container>
        </Navbar>
    );
}

export default Navegacion;
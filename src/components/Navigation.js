import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className='white'>
                            Blog
                        </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/list" className="gray">list</Link>
                        <Link to="/written" className="gray">written</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;
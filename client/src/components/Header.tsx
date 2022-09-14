import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut, selectUser } from '../features/authSlice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const dispatch = useDispatch()
    const { token, username } = useSelector(selectUser)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link disabled>Hello {username ? username : 'Guest'}</Nav.Link>
                        {!token ? 
                            <>
                                <Nav.Link as={Link} to={`sign-in`}>Sign-In</Nav.Link>
                                <Nav.Link as={Link} to={`sign-up`}>Sign-Up</Nav.Link>
                            </> : <>
                                <Nav.Link as={Link} to={`/${username}`}>Home</Nav.Link>
                                <Nav.Link as={Link} to={'/sign-in'}
                                    onClick={() => dispatch(logOut())}>Logout</Nav.Link>
                                <Nav.Link as={Link} to={`/reports`}>Reports</Nav.Link>
                            </>}

                        { username === 'admin' ?
                            <>
                                <Nav.Link as={Link} to={'/vacation/add'}>Add Vacation</Nav.Link>
                            </>
                            : null}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, selectUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';

function Login() {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector(selectUser)
    useEffect(() => {
        if (user.token) {
            navigate(`/${user.username}`)
        }
    },[])

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post('/auth/login', {
            username: userName,
            password: password
        })
            .then(res => dispatch(logIn(res.data)))
            .then(() => navigate(`/${userName}`))
            .catch(res => setError(res.response.data.errors[0].msg))
    }

    return (
        <Container style={{ background:"#c0c3f78f"}}>
            <Row>
                <Col className="mx-auto p-5 pt-1 mt-5" sm={4}>
                    <Form style={{
                        border: "black 3px solid",
                        borderRadius: "4%",
                        background: "#8a93f1b1",
                        minHeight:"18.5em"
                    }}>
                        <h3 className="text-center mt-4">Sign In</h3>
                        {error ? <div>{error}</div> : null}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                onChange={(e) => setUserName(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </Form.Group>
                        <div className='text-center'>
                        <Button                            
                            variant="primary"
                            type="submit"
                            onClick={handleLogin}>
                            Submit
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login



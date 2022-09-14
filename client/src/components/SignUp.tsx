import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';

function SignUp() {
    const [firstName, setFirstName] = useState<string>('')
    const [LastName, setLastName] = useState<string>('')
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState(null)
    const addUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        axios.post('/auth/register', {
            firstName: firstName,
            lastName: LastName,
            username: userName,
            password: password
        })
            .then(res => console.log(res))
            .catch(res => setError(res.response.data.errors[0].msg))
    }

    return (
        <Container style={{ background: "#c0c3f78f" }}>
            <Row>
                <Col className="mx-auto p-5 pt-1 mt-5" sm={4}>
                    <Form style={{
                        border: "black 3px solid",
                        borderRadius: "4%",
                        background: "#8a93f1b1",
                        minHeight: "29em"
                    }}>
                        <h3 className="text-center mt-4">Sign Up</h3>
                        {error ? <div style={{ color: 'red' }}>{error}</div> : null}
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                onChange={(e) => setFirstName(e.target.value)}
                                required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                onChange={(e) => setLastName(e.target.value)}
                                required />
                        </Form.Group>
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
                            onClick={addUser}>
                            Sign In
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { VacationModel } from '../../interfaces/vacation.interface'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/authSlice';
import { getVacations, addVacation } from '../../features/vacationSlice';
import { getSocket } from '../../GetSocket';

const UploadVacation = () => {
    const user = useSelector(selectUser)
    const socket = getSocket()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState<Partial<VacationModel>>({})
    const [file, setFile] = useState<any>([])

    useEffect(() => {
        socket.on("onAddClient", (vacation) => dispatch(addVacation(vacation)))
    }, [socket])

    const handleFileChange = (e: any) => {
        setFile([e.target.name, e.currentTarget.files[0], e.target.value]);
    };

    function handleAddVacation(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData()
        Object.entries(inputs).forEach((kv) =>
            formData.append(kv[0], kv[1].toString()));
        formData.append(file[0], file[1], file[2]);

        axios.post('/vacations/add', formData, {
            headers: {
                'authorization': `Bearer ${user.token}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            dispatch(addVacation(res.data))
            socket.emit("onAddServer", res.data)
        })
            
        navigate(`/${user.username}`)
    }

    return (
        <Container>
            <Row>
                <Col className="mx-auto p-5 pt-1" sm={4}>
                    <Form style={{ maxWidth: "350px" }} onSubmit={handleAddVacation}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control
                                name='destination'
                                type="text"
                                placeholder="Enter Destination"
                                onChange={(e) => setInputs({ ...inputs, 'destination': e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Desription</Form.Label>
                            <Form.Control
                                as="textarea"
                                name='description'
                                type="text"
                                placeholder="Enter Desription"
                                onChange={(e) => setInputs({ ...inputs, 'description': e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Picture</Form.Label>
                            <Form.Control
                                name='picture'
                                type="file"
                                placeholder="Enter Picture"
                                required
                                onChange={handleFileChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                name='from_date'
                                type="date"
                                placeholder="Enter Start Date"
                                required
                                onChange={(e) => setInputs({ ...inputs, from_date: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                                name='to_date'
                                type="date"
                                placeholder="Enter End Date"
                                required
                                onChange={(e) => setInputs({ ...inputs, to_date: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                name='price'
                                type="number"
                                placeholder="Enter Price"
                                onChange={(e) => setInputs({ ...inputs, price: Number(e.target.value) })} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default UploadVacation
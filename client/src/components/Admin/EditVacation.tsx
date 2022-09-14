import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getSocket } from '../../GetSocket';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { VacationModel } from '../../interfaces/vacation.interface'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/authSlice';
import { getVacations, selectVacation } from '../../features/vacationSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditVacation = (params: any) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectUser)
    const vacation = useSelector(selectVacation)
    const {vacationId} = useParams()
    const [inputs, setInputs] = useState<Partial<VacationModel>>({})
    const [file, setFile] = useState<any>([])
    const socket = getSocket()

    useEffect(() => {
        socket.on("onEditClient", (vId) => dispatch(getVacations(vId)))
    }, [socket])

    const handleFileChange = (e: any) => {
        setFile([e.target.name, e.currentTarget.files[0], e.target.value]);
    };

    function editVacation(e: any) {
        e.preventDefault();
        const formData = new FormData()
        Object.entries(inputs).forEach((kv) => {
            formData.append(kv[0], kv[1].toString())
        });
        if (file.length > 0) {
            formData.append(file[0], file[1], file[2]);
        }
        console.log(file)
        axios.put(`/vacations/edit/${vacationId}`, formData, {
            headers: {
                'authorization': `Bearer ${user.token}`,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => dispatch(getVacations(res.data))).then(() => socket.emit("onEditServer", vacationId))
        navigate(`/${user.username}`)
    }

    return (
        <Container>
            <Row>
                <Col className="mx-auto p-5 pt-1" sm={4}>
                    <Form style={{ maxWidth: "350px" }} onSubmit={editVacation}>
                        <>
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
                                    onChange={handleFileChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    name='from_date'
                                    type="date"
                                    placeholder="Enter Start Date"
                                    onChange={(e) => setInputs({ ...inputs, from_date: e.target.value })} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    name='to_date'
                                    type="date"
                                    placeholder="Enter End Date"
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
                            <Button data-id={params.id} variant="primary" type="submit">
                                Submit
                            </Button>
                        </>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditVacation
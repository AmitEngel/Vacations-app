//import '../style/Home.css'; 
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/authSlice';
import { getVacations, selectVacation, deleteVacation } from '../features/vacationSlice';
import { follow, selectFollow, unFollow } from '../features/followSlice';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { VacationModel } from '../interfaces/vacation.interface';
import { getSocket } from '../GetSocket';

const Vacation = ({ currentVacation }: { currentVacation: VacationModel }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const vacation = useSelector(selectVacation)
  const followed = useSelector(selectFollow)
  const [isFollowed, setIsFollowed] = useState(false)
  const socket = getSocket()

  useEffect(() => {
    if (followed.find((v: { vacation_id: number }) => v.vacation_id == currentVacation.id)!) {
      setIsFollowed(true)
    }
  }, [followed])

  useEffect(() => {
    socket.on("onDeleteClient", (vId) => dispatch(deleteVacation(vId)))
  }, [socket])
  
  function handleFollow(e: any) {
    if (e.target.innerText === 'Follow') {
      const followedVacation = (vacation.find(v => e.target.dataset.id == v.id))
      axios.post(`/vacations/follow/${followedVacation?.id}`, {
        user_id: user.id,
        vacation_id: followedVacation?.id
      }, {
        headers: {
          'authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      }).then(res => setIsFollowed(true))
      return;
    }
    if (e.target.innerText === 'Unfollow') {
      const followedVacation = (vacation.find(v => e.target.dataset.id == v.id))
      axios.delete(`/vacations/follow/${followedVacation?.id}/${user.id}`, {
        headers: {
          'authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      }).then(res => setIsFollowed(false))
      return;
    }
  }

  function handleDelete(e: any) {
    const selectedVacation = (vacation.find(v => e.target.dataset.id == v.id))
    axios.delete(`/vacations/${selectedVacation?.id}`, {
      headers: {
        'authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    }).then(res => dispatch(deleteVacation(currentVacation.id))).then(() => socket.emit("onDeleteServer", currentVacation.id))
    navigate(`/${user.username}`)
  }

  return (
    <>
      <Col>
        <Card style={{ width: '18rem', marginBottom: "50px" }}>
          <Card.Img style={{ height: "200px" }} variant="top" src={`/images/${currentVacation.picture}`} />
          <Card.Body>
            <Card.Title>{currentVacation.destination}</Card.Title>
            <Card.Text style={{ maxHeight: "150px", overflowY: 'scroll' }}>
              {currentVacation.description}
            </Card.Text>
            {user.username === 'admin' ? <> <Button data-id={currentVacation.id} variant="primary" onClick={handleDelete}>
              Delete
            </Button>             
              <Link to={`/edit/${currentVacation.id}`}><Button style={{marginLeft:"1rem"}}>Edit</Button></Link>
            </>
              : <Button data-id={currentVacation.id} variant="primary" onClick={handleFollow}>
                {isFollowed ? 'Unfollow' : 'Follow'}
              </Button>}
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Vacation
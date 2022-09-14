//import '../style/Home.css'; 
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logIn } from '../../features/authSlice';
import { selectUser } from '../../features/authSlice';
import { getVacations, selectVacation } from '../../features/vacationSlice';
import { follow, selectFollow, unFollow } from '../../features/followSlice';
import { Button, Card, Col, Row } from 'react-bootstrap';

const VacationUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const vacation = useSelector(selectVacation)
  const followed = useSelector(selectFollow)

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
      }).then(res => dispatch(follow({ uId: user.id, vId: followedVacation?.id })))
      return;
    }
    if (e.target.innerText === 'Unfollow') {
      const followedVacation = (vacation.find(v => e.target.dataset.id == v.id))
      axios.delete(`/vacations/follow/${followedVacation?.id}/${user.id}`, {
        headers: {
          'authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      }).then(res => dispatch(unFollow({ uId: user.id, vId: followedVacation?.id })))
      return;
    }
  }

  return (
    <>
        {vacation.map((v, i) => {
          return (
            <Col key={i}>
              <Card style={{ width: '18rem', marginBottom: "50px" }}>
                <Card.Img style={{ height: "200px" }} variant="top" src={`/images/${v.picture}`} />
                <Card.Body>
                  <Card.Title>{v.destination}</Card.Title>
                  <Card.Text style={{ maxHeight: "150px", overflowY: 'scroll' }}>
                    {v.description}
                  </Card.Text>
                    <Button data-id={v.id} variant="primary" onClick={handleFollow}>
                      {followed.find((f: { uId: number, vId: number }) => v.id === f.vId) ? 'Unfollow' : 'Follow'}
                    </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })
        }
    </>
  )
}

export default VacationUser
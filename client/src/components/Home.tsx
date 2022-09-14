import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logIn } from '../features/authSlice';
import { selectUser } from '../features/authSlice';
import { getVacations, selectVacation } from '../features/vacationSlice';
import { follow, selectFollow, unFollow } from '../features/followSlice';
import { Row } from 'react-bootstrap';
import Vacation from './Vacation';


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const vacation = useSelector(selectVacation)
  const followed = useSelector(selectFollow)

  useEffect(() => {
    if (!user.token) {
      return navigate('/', { replace: true })
    }
    if (!user.id) {
      axios.get(`/refresh/user_info`, {
        headers:
          { authorization: `Bearer ${user.token}` }
      })
        .then(res => dispatch(logIn(res.data[0])))
    }
  }, [user.token])

  useEffect(() => {
    if (!user.token) {
      return navigate('/', { replace: true })
    }
    axios.get('/vacations', {
      headers:
        { authorization: `Bearer ${user.token}` }
    })
      .then(res => dispatch(getVacations(res.data)))
  }, [user])

  useEffect(() => {
    if (!user.token) {
      return navigate('/', { replace: true })
    }
    if (user.username) {
      axios.get(`/refresh/${user.id}/follow_info`, {
        headers:
          { authorization: `Bearer ${user.token}` }
      }).then(res => dispatch(follow(res.data)))
    }
  }, [user.username])

  return (
      <Row
        className='container'
        style={{ marginRight: "100px", marginLeft: "100px", marginTop: "70px" }}>
        {vacation.map(v=> <Vacation key={v.id} currentVacation={v} />)}
      </Row>
  )
}

export default Home
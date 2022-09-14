import { Routes, Route } from 'react-router-dom';
import { getSocket } from './GetSocket';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Header from './components/Header';
import UploadVacation from './components/Admin/UploadVacation';
import EditVacation from './components/Admin/EditVacation';
import Reports from './components/Reports';
import { useEffect, useState } from 'react';


function App() {
  const socket = getSocket()
  useEffect(() => {
  
})

  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:username" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/vacation/add" element={<UploadVacation />} />
        <Route path="/edit/:vacationId" element={<EditVacation />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from './pages/Dashboard'
import UserContext from './contexts/UserContext';
import CustomizeTemplate from './pages/CustomizeTemplate';

function App() {
  const [user, setUser] = useState(null)
  // useEffect(() => {
  //  const currentUser = localStorage.getItem("user")
  //  if (!currentUser){
  //    setUser(null)
  //  }
  //  else{
  //    setUser(JSON.parse(currentUser))
  //  }
  //},[])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/customizer' element={<CustomizeTemplate />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from './pages/Dashboard'
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

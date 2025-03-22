import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from './pages/Dashboard'
import UserContext from './contexts/UserContext';
import CustomizeTemplate from './pages/CustomizeTemplate';
import Documentation from './pages/Documentation';
import Main from './layouts/Main';
import LoginPage from './pages/LoginPage';
import Templates from './pages/Templates';
import EmailSender from './pages/EmailSender';

function App() {
  const getUserFromStorage = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };
  const [user, setUser] = useState(getUserFromStorage)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Main />} >
            <Route path='' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/dashboard/compose-email/:projectId/' element={<EmailSender />} />
            <Route path='/templates/:projectId/' element={<Templates />} />
            <Route path='/docs' element={<Documentation />} />
          </Route>
          <Route path='/customizer' element={<CustomizeTemplate />} />
          <Route path='/customizer/:projectId/' element={<CustomizeTemplate />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

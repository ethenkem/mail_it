import { createContext, useEffect, useState } from "react";

const UserContext = createContext()
export const UserProvider = ({ children }) => {
  
  const getLoginUser = () => {
    const user = localStorage.getItem("user")
    console.log(user)
    if (user) {
      return JSON.parse(user);
    }
  } 
  const [user, setUser] = useState(getLoginUser)
  
  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    console.log(currentUser)
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContext

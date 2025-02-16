import { createContext, useState } from "react";

const UserContext = createContext()
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    }
    else {
      localStorage.removeItem("user")
    }

  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContext

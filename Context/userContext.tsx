import { createContext, useState } from 'react'

type userContextType = {
  user: any
  setUser: Function
}

const userContextDefaultValues: userContextType = {
  user: [],
  setUser: () => {},
}

const UserContext = createContext<userContextType>(userContextDefaultValues)

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>([])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }

export default UserContext

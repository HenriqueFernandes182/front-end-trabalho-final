import { createContext } from 'react'

const AuthContext = createContext({
    isAuthenticated: false,
    authToken: '',
    setAuthToken: (authToken) => {},
    setIsAuthenticated: (isAuthenticated) => { }
})


export default AuthContext;
import { createContext } from 'react'

const AuthContext = createContext({
    isAuthenticated: false,
    authToken: '',
    errorMessage: '',
    isErrorOpen: false,
    successMessage: '',
    isSuccessOpen: false,
    setErrorMessage: () => {},
    setSuccessMessage: () => {},
    setIsErrorOpen: () => {},
    setisSuccesOpen: () => {},
    setAuthToken: (authToken) => {},
    setIsAuthenticated: (isAuthenticated) => { }
})


export default AuthContext;
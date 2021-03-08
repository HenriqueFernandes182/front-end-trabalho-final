
import React, {useReducer} from 'react';
import './App.css';
import PaginaInicial from './components/PaginaInicial';
import AuthReducer from './context/AuthReducer';
import AuthContext from './context/AuthContext';

function App() {
  const [state, dispatch] = useReducer(AuthReducer, {isAuthenticated: false, authToken: ''})
  
  const setIsAuthenticated = (isAuthenticated)=> {
    dispatch({
      type: 'SET_IS_AUTHENTICATED',
      payload: isAuthenticated
    })

  }

  const setAuthToken = (authToken) => {
    dispatch({
      type: 'SET_AUTH_TOKEN',
      payload: authToken
    })
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        authToken: state.authToken,
        setAuthToken,
        setIsAuthenticated
      }} >
      <div className="App">
        <PaginaInicial />
      </div>
    </AuthContext.Provider>

  );
}

export default App;

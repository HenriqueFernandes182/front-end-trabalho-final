
import React, {useReducer} from 'react';
import './App.css';
import PaginaInicial from './components/PaginaInicial';
import AuthReducer from './context/AuthReducer';
import AuthContext from './context/AuthContext';
import { Route, Switch } from 'react-router-dom';
import PaginaDeUsuarios from './components/PaginaDeUsuarios';
import PaginadoProduto from './components/PaginadoProduto';

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
          <Switch>
                <Route path="/" component={PaginaInicial} exact />
                <Route path="/usuarios" component={PaginaDeUsuarios} />
                <Route path="/produtos" component={PaginadoProduto} />
                <Route component={Error} />
            </Switch>
    </AuthContext.Provider>

  );
}

export default App;

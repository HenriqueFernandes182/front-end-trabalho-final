
import React, {useReducer} from 'react';
import './App.css';
import PaginaInicial from './components/PaginaInicial';
import AuthReducer from './context/AuthReducer';
import AuthContext from './context/AuthContext';
import { Route, Switch } from 'react-router-dom';
import PaginaDeUsuarios from './components/PaginaDeUsuarios';
import PaginadoProduto from './components/PaginadoProduto';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function App() {
  const [state, dispatch] = useReducer(AuthReducer, {isAuthenticated: false, authToken: '', errorMessage: '', successMessage: '', isSuccessOpen: false,  isErrorOpen: false})
  
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

  const setIsErrorOpen = (isErrorOpen) => {
    dispatch({
      type: 'SET_IS_ERROR_OPEN',
      payload: isErrorOpen
    })
  }

  const setIsSuccessOpen = (isSuccessOpen) => {
    dispatch({
      type: 'SET_IS_SUCCESS_OPEN',
      payload: isSuccessOpen
    })
  }

  const setErrorMessage = (errorMessage) => {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      payload: errorMessage
    })
  }

  const setSuccessMessage = (successMessage) => {
    dispatch({
      type: 'SET_SUCCESS_MESSAGE',
      payload: successMessage
    })
  }




  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        authToken: state.authToken,
        errorMessage: state.errorMessage,
        successMessage: state.successMessage,
        isErrorOpen: state.isErrorOpen,
        isSuccessOpen: state.isSuccessOpen,
        setAuthToken,
        setIsAuthenticated,
        setIsErrorOpen,
        setIsSuccessOpen, 
        setErrorMessage, 
        setSuccessMessage,
        

      }} >
      <Snackbar anchorOrigin= {{ vertical: 'top', horizontal: 'center' }} open={state.isSuccessOpen} autoHideDuration={6000} onClose={()=>setIsSuccessOpen(false)}>
        <Alert onClose={()=>setIsSuccessOpen(false)} severity="success">
          {state.successMessage}
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin= {{ vertical: 'top', horizontal: 'center' }} open={state.isErrorOpen} autoHideDuration={6000} onClose={()=>setIsErrorOpen(false)}>
        <Alert onClose={()=>setIsErrorOpen(false)} severity="error">
          {state.errorMessage}
        </Alert>
      </Snackbar>
          <Switch>
                <Route path="/" component={PaginaInicial} exact />
                <Route path="/usuarios" component={PaginaDeUsuarios}/>
                <Route path="/produtos" component={PaginadoProduto}/>
                <Route component={Error} />
            </Switch>
    </AuthContext.Provider>

  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
export default App;

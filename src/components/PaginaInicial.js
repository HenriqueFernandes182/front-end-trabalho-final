
import React, {useState, useContext} from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import ServicoDeAutenticacao from '../servicos/ServicoDeAutenticacao'; 
import AuthContext from '../context/AuthContext';

import DialogTitle from '@material-ui/core/DialogTitle';



const PaginaInicial = () => {
    
    const classes = useStyles()
    const context = useContext(AuthContext)
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginSenha, setLoginSenha] = useState('');
    const servicoDeAutenticacao= new ServicoDeAutenticacao();


    const handleClickOpen = () => {
      setLoginOpen(true);
    };
  
    const handleLoginClose = () => {
      setLoginOpen(false);
    };

    const handleSignupClose = () => {
        setSignupOpen(false);
    };
    
    const handlesignupOpen = () => {
        setSignupOpen(true);
    };


    const handleLogin = ()=> {
        servicoDeAutenticacao.autenticarUsuario({email: loginEmail, password:loginSenha})
        .then((res)=> {
            if(res.token){
                context.setIsAuthenticated(true)
                context.setAuthToken(res.token)
            } 
        })
        setLoginOpen(false)
    }

    const handleLoginEmailChange = (value) => {
       
        setLoginEmail(value)
        
    }

    const handleLoginSenhaChange = (value) => {
        setLoginSenha(value)
       
    }




    return (
        <div>
            {/* <PaginaDeUsuarios/> */}
            {/* <PaginadoProduto/> */}
            <div>
                <Dialog open={loginOpen} onClose={handleLoginClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">LOGIN</DialogTitle>
                <DialogContent>
               
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        onChange={(event) => handleLoginEmailChange(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="senha"
                        label="Senha"
                        type="password"
                        onChange={(event) => handleLoginSenhaChange(event.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLoginClose} color="primary">
                    Cancelar
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                    Login
                    </Button>
                </DialogActions>
                </Dialog>
            </div>

            <div>
                <Dialog open={signupOpen} onClose={handleSignupClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">SIGNUP</DialogTitle>
                <DialogContent>
                <TextField
                        autoFocus
                        margin="dense"
                        id="nome"
                        label="Nome"
                        type="text"
                        fullWidth
                    />
                    
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email-signup"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="senha"
                        label="Senha"
                        type="password"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="confirmar-senha"
                        label="Confirmar Senha"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSignupClose} color="primary">
                    Cancelar
                    </Button>
                    <Button onClick={handleSignupClose} color="primary">
                    SignUp
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        
        


        <div className={classes.paginaInicial}>
            <NavBar handleClickOpenLogin={handleClickOpen} handleClickOpenSignup={handlesignupOpen}/>
            <div className={classes.descricao}>
                O aplicativo que ajuda sua 
            </div>
        </div>
        </div>
    );
  }

  const useStyles = makeStyles((theme) => ({
    paginaInicial: {
        backgroundImage: `url("https://www.brooksbymelton.ac.uk/wp-content/uploads/2018/01/cleaning.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100vh"
    },
    descricao: {
        color:'white',
        fontSize: '90px',
        paddingTop: '400px',
        textAlign: 'start',
        paddingLeft:'30px'
    }  
  }));



  export default PaginaInicial;
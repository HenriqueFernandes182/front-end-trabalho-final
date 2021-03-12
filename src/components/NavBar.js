import React, {useContext} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';



const NavBar = ({handleClickOpenLogin, handleClickOpenSignup})=> {
    const classes = useStyles();
    const context = useContext(AuthContext)


    return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
        <Toolbar className="">
          
          <Typography variant="h6" className={classes.title}>
              Controle de Estoque
          </Typography>
        {  !window.localStorage.getItem('token') && 
        <div>
          <Button className={classes.login} color="inherit" onClick={handleClickOpenLogin} >Login</Button>
          <Button className={classes.login} color="inherit" onClick={handleClickOpenSignup}>Sign up</Button>
        </div> 
        }

        {
          window.localStorage.getItem('token') &&
          <div>
          <Link to="/produtos"><Button className={classes.login} color="inherit">Produtos</Button></Link>
          <Link to="/usuarios"><Button className={classes.login} color="inherit">Usuarios</Button></Link>
          <Link to="/"><Button onClick={()=> window.localStorage.removeItem('token')} className={classes.login} color="inherit">Log Out</Button></Link>
          </div>

        }
        </Toolbar>
    </AppBar>
  </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'start',
      fontSize: '40px',
      color:'black',
      paddingTop:'10px'

    },
    login: {
      fontSize: '25px',
      color: 'black',
      textDecoration: 'none !important',
      border: '0px'
    },
    navBar: {
      backgroundColor:'white',
      height:'80px'
    }
  }));

  export default NavBar;
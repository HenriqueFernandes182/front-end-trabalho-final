import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const NavBar = ({handleClickOpenLogin, handleClickOpenSignup})=> {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
        <Toolbar className="">
          
          <Typography variant="h6" className={classes.title}>
              Controle de Estoque
          </Typography>
        <Button className={classes.login} color="inherit" onClick={handleClickOpenLogin} >Login</Button>
        <Button className={classes.login} color="inherit" onClick={handleClickOpenSignup}>Sign up</Button>
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
      color: 'black'
    },
    navBar: {
      backgroundColor:'white',
      height:'80px'
    }
  }));

  export default NavBar;
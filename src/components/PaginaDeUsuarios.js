import React from 'react';
import TabelaDeUsuarios from './TabelaDeUsuarios';
import NavBar from './NavBar';
import PaginaInicial from './PaginaInicial';

import { makeStyles, Typography } from '@material-ui/core';


export default function PaginaDeUsuario() {
    const classes = useStyles();
    return (
        <div>
        {!window.localStorage.getItem('token') && <PaginaInicial/>}
        {window.localStorage.getItem('token') && 
            <div>
            <NavBar />
            <Typography variant="h3" className={classes.header}>Usuários</Typography>
            <div className={classes.tabela}>
                <TabelaDeUsuarios />
            </div>
    </div>}
    </div>
        
    )
}
const useStyles = makeStyles({
    tabela: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        /* bring your own prefixes */
        transform: 'translate(-50%, -50%)'
    },
    header:{
        textAlign: 'left',
        paddingLeft: '30px',
        paddingTop:'20px'
    }
  });
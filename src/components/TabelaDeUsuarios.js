import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SwitchUsuario from './SwitchUsuario';


function createData(nome, email, status) {
  return { nome, email, status};
}

const rows = [
  createData('Henrique Fernandes', 'hicky_hc@hotmail.com', true),
  createData('Nicolas dos Santos', 'nicolas182@icloud.com', true),
  createData('Henrique Fernandes', 'hicky_hc@hotmail.com', true),
  createData('Henrique Fernandes', 'hicky_hc@hotmail.com', true)
];


export default function TabelaDeUsuarios() {
    const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className={classes.text}>Nome</TableCell>
            <TableCell className={classes.text}>Email</TableCell>
            <TableCell className={classes.text}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nome}>
              <TableCell component="th" scope="row" className={classes.text}>
                {row.nome}
              </TableCell>
              <TableCell  className={classes.text}>{row.email}</TableCell>
        
            
              <TableCell className={classes.text}><SwitchUsuario/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
    table: {
      width: '1000px',
      backgroundColor:'#00bcd4'
    },
    container :{
        width:'1000px'
    },
    text: {
        
    }
  });
  
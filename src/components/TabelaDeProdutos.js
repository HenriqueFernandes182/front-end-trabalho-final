import React from 'react'
import { makeStyles, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ServicoDeUsuarios from '../servicos/ServicoDeUsuarios';
import ClienteApi from '../cliente/ClienteApi';


function createData(produto, marca, quantidade) {
  return { produto, marca, quantidade};
}

const rows = [
  createData('OMO', 'Sabao em po', 4),
  createData('OMO', 'Sabao em po', 4),
  createData('OMO', 'Sabao em po', 4),
  createData('OMO', 'Sabao em po', 4),
  
];


export default function TabelaDeProdutos({handleOpen}) {
    const classes = useStyles();
    
    // const servicoDeUsuarios = new ServicoDeUsuarios()

    // servicoDeUsuarios.getUsuarios()
    // servicoDeUsuarios.getUsuario('7d386be2-de5f-4654-b2f8-585a129cfcc1')

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={classes.text}>Produto</TableCell>
            <TableCell  className={classes.text}>Marca</TableCell>            
            <TableCell className={classes.text}>Quantidade</TableCell>
            <TableCell className={classes.text}>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nome}>
              <TableCell component="th" scope="row" className={classes.text}>
                {row.produto}
              </TableCell>
              <TableCell  className={classes.text}>{row.marca}</TableCell>
        
            
              <TableCell className={classes.text}>{row.quantidade}</TableCell>
              <TableCell className={classes.text}><Button onClick={()=> handleOpen(true)}>Editar</Button> <Button>Deletar</Button></TableCell>
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
  
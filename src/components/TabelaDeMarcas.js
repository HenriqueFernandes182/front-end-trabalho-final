import React, {useEffect, useState} from 'react'
import { makeStyles, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ServicoDeProdutos from '../servicos/ServicoDeProdutos';
import ServicoDeUsuarios from '../servicos/ServicoDeUsuarios';
import ClienteApi from '../cliente/ClienteApi';




export default function TabelaDeProdutos({handleOpen, marcasProp}) {
    const classes = useStyles();
    
    const [marcas, setMarcas] = useState([])

    useEffect(()=> {
      setMarcas(marcasProp)
    }, [marcasProp])
    
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={classes.text}>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {marcas.map((marca, index) => (
            <TableRow key={marca.uid}>
              <TableCell component="th" scope="row" className={classes.text}>
                {marca.name}
              </TableCell>
      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles({
    table: {
      width: '200px',
      backgroundColor:'#00bcd4'
    },
    container :{
        width:'200px'
    },
    text: {
        
    }
  });
  
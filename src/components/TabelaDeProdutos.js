import React, {useEffect, useState, useContext} from 'react'
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
import AuthContext from '../context/AuthContext';




export default function TabelaDeProdutos({handleOpen, produtosProp}) {
    const classes = useStyles();
    
    const [produtos, setProdutos] = useState([])
    const servicoDeProdutos = new ServicoDeProdutos()
    const context = useContext(AuthContext)

    const handleDelete = (id, index)=> {
      servicoDeProdutos.deleteProduto(id)
      .then(()=> {
        context.setSuccessMessage('Produto deletado com sucesso')
        
        context.setIsSuccessOpen(true)
      }).catch(err=> {
        context.setErrorMessage('Produto deletado com sucesso')
        context.setIsErrorOpen(true)
      })
    }

    useEffect(()=> {
      setProdutos(produtosProp)
  }, [produtosProp])
  
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
          {produtos.map((produto, index) => (
            <TableRow key={produto.uid}>
              <TableCell component="th" scope="row" className={classes.text}>
                {produto.name}
              </TableCell>
              <TableCell  className={classes.text}>{produto.marcas.name}</TableCell>
        

              <TableCell className={classes.text}>{produto.quantidade}</TableCell>
              <TableCell className={classes.text}><Button onClick={()=> handleOpen(true, produto, index)}>Editar</Button> <Button onClick={()=>handleDelete(produto.uid, index)}>Deletar</Button></TableCell>
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
  
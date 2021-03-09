import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SwitchUsuario from './SwitchUsuario';
import ServicoDeUsuarios from '../servicos/ServicoDeUsuarios';




export default function TabelaDeUsuarios() {
    const classes = useStyles();
    const servicoDeUsuarios = new ServicoDeUsuarios()

    const [usuarios, setUsuarios] = useState([])

    const [ativo, setAtivo] = useState(true)


    const handleAtivo = () => {
      setAtivo(!ativo);
    };

    useEffect(()=> {
      servicoDeUsuarios.getUsuarios()
      .then((res) => {
        setUsuarios(res.users)
      
      }).catch((err)=> {
        console.log('error', err)
        
      })
    }, [])
    


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
          {usuarios.map((usuario) => (
            <TableRow key={usuario.uid}>
              <TableCell component="th" scope="row" className={classes.text}>
                {usuario.name}
              </TableCell>
              <TableCell  className={classes.text}>{usuario.email}</TableCell>
              <TableCell className={classes.text}><SwitchUsuario ativo={usuario.ativar_usuario} user={usuario}/></TableCell>
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
  
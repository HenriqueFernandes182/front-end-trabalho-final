import React, {useState, useEffect, useContext} from 'react';
import TabelaDeMarcas from './TabelaDeMarcas';
import PaginaInicial from './PaginaInicial';
import NavBar from './NavBar';
import ServicoDeMarcas from '../servicos/ServicoDeMarcas';
import AuthContext from '../context/AuthContext'
import { makeStyles, Typography, Button, Dialog, DialogContent, DialogTitle, TextField, DialogActions} from '@material-ui/core';


export default function PaginaDeMarcas() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [editando, setEditando] = useState(false)
    const [title, setTitle] = useState('Criar Marca')
    
    const context = useContext(AuthContext)
    const [name, setName] = useState('')    
    const [marcas, setMarcas] = useState([])

    const servicoDeMarcas = new ServicoDeMarcas()

    

  
    useEffect(()=>{
        servicoDeMarcas.getMarcas().then((res)=>{
          setMarcas(res.marcas)

        })
    },[])

    const handleClose = ()=> {
        setOpen(false)
    }
    
    const handleNomeChange = (value)=> {
        setName(value)
    }

    const handleSave = () => {
        if(editando){
            ServicoDeMarcas.putMarca({name})
             .then((res)=> {
                 context.setSuccessMessage('Marca salva com Sucesso!')
                 context.setIsSuccessOpen(true)
             }).catch((err)=> {
                context.setErrorMessage('Nao foi possivel salvar a Marca!')
                context.setIsErrorOpen(true)
             })
             setOpen(false)
        }else {
            ServicoDeMarcas.postMarcas({name})
             .then((res)=> {
                 console.log(res)
                 context.setSuccessMessage('Produto criado com sucesso!')
                 context.setIsSuccessOpen(true)
             }).catch((err)=> {
                context.setErrorMessage('Nao foi possivel criar o produto!')
                context.setIsErrorOpen(true)
             })
             setOpen(false)
        }
     }

    const handleOpen = (editar = false, marca={}, index = null)=> {
        setOpen(true)
        if(editar) {
            let marc = marcas
            
            setName(marca.name)            
            marc[index] = {name}
            setMarcas(marc)
            setTitle('Editar Marca') 
            setEditando(true) 
            
        }else {
            setTitle('Criar Marca')



            setEditando(false)
        }
    }

    return (
        <div>
        {!window.localStorage.getItem('token') && <PaginaInicial/>}
        {window.localStorage.getItem('token') && 
            <div>
                <NavBar />

                <div>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="marca"
                            label="Marca"
                            value={name}
                            onChange={(event)=> handleNomeChange(event.target.value)}
                            type="text"
                            fullWidth
                        />
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                        Cancelar
                        </Button>
                        <Button onClick={handleSave} color="primary">
                        Salvar
                        </Button>
                    </DialogActions>
                    </Dialog>
                </div>

                <Typography variant="h3" className={classes.header}>Marcas</Typography>
                <div className={classes.tabela}>
                    <TabelaDeMarcas handleOpen={handleOpen} marcasProp={marcas}/>
                    <div >
                        <Button onClick={()=>handleOpen(false)}>Nova Marca</Button>
                    </div>
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


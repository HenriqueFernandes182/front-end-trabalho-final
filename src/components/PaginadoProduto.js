import React, {useState} from 'react';
import TabelaDeProdutos from './TabelaDeProdutos';
import NavBar from './NavBar';
import { makeStyles, Typography, Button, Dialog, DialogContent, DialogTitle, TextField, DialogActions} from '@material-ui/core';


export default function PaginadoProduto() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [editando, setEditando] = useState(false)
    const [title, setTitle] = useState('Criar Produto')
    const [produto, setProduto] = useState({nome:'Sabao Em Po', marca:'OMO', quantidade:5 })

    const handleClose = ()=> {
        setOpen(false)
    }

    const handleNomeChange = (value)=> {
        setProduto({
            ...produto,
            nome: value
        })
    }

    const handleMarcaChange = (value)=> {
        setProduto({
            ...produto,
            marca: value
        })
    }

    const handleQuantidadeChange = (value)=> {
        setProduto({
            ...produto,
            quantidade: value
        })
    }

    const handleOpen = (editar = false)=> {
        setOpen(true)
        if(editar) {
            setTitle('Editar Produto') 
            setEditando(true) 
        }else {
            setTitle('Criar Produto')
            setEditando(false)
        }
    }
    return (
        <div>
            <NavBar />

             <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="produto"
                        label="Produto"
                        value={editando ? produto.nome : ''}
                        onChange={(event)=> handleNomeChange(event.target.value)}
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="marca"
                        label="Marca"
                        type="text"
                        value={editando ? produto.marca : ''}
                        onChange={(event)=> handleMarcaChange(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="quantidade"
                        label="Quantidade"
                        type="number"
                        onChange={(event)=> handleQuantidadeChange(event.target.value)}
                        value={editando ? produto.quantidade : ''}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancelar
                    </Button>
                    <Button onClick={handleClose} color="primary">
                    Salvar
                    </Button>
                </DialogActions>
                </Dialog>
            </div>





            <Typography variant="h3" className={classes.header}>Produtos</Typography>
            <div className={classes.tabela}>
                <TabelaDeProdutos handleOpen={handleOpen}/>
                <div >
                    <Button onClick={()=>handleOpen(false)}>Novo Produto</Button>
                </div>
            </div>
            
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


import React, {useState, useEffect, useContext} from 'react';
import TabelaDeProdutos from './TabelaDeProdutos';
import PaginaInicial from './PaginaInicial';
import NavBar from './NavBar';
import ServicoDeProdutos from '../servicos/ServicoDeProdutos';
import AuthContext from '../context/AuthContext'
import { makeStyles, Typography, Button, Dialog, DialogContent, DialogTitle, TextField, DialogActions} from '@material-ui/core';


export default function PaginadoProduto() {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [editando, setEditando] = useState(false)
    const [title, setTitle] = useState('Criar Produto')
    
    const context = useContext(AuthContext)
    const [name, setName] = useState('')
    const [marca, setMarca] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [uid, setUid] = useState('')
    const [produtos, setProdutos] = useState([])

    const servicoDeProdutos = new ServicoDeProdutos()

    

  
    useEffect(()=>{
      servicoDeProdutos.getProdutos().then((res)=>{
          setProdutos(res.produtos)

        })
    },[])

    const handleClose = ()=> {
        setOpen(false)
    }
    
    const handleNomeChange = (value)=> {
        setName(value)
    }

    const handleMarcaChange = (value)=> {
        setMarca(value)
    }

    const handleQuantidadeChange = (value)=> {
       setQuantidade(value)
    }

    const handleSave = () => {
        if(editando){
             servicoDeProdutos.putProduto({name, marca, quantidade} , uid)
             .then((res)=> {
                 context.setSuccessMessage('Produto Salvo com sucesso!')
                 context.setIsSuccessOpen(true)
             }).catch((err)=> {
                context.setErrorMessage('Nao foi possivel salvar o produto!')
                context.setIsErrorOpen(true)
             })
             setOpen(false)
        }else {
            servicoDeProdutos.postProduto({name, marca, quantidade})
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

    const handleOpen = (editar = false, produto={}, index = null)=> {
        setOpen(true)
        if(editar) {
            let prod = produtos
            
            setName(produto.name)
            setMarca(produto.marcas.name)
            setQuantidade(produto.quantidade)
            setUid(produto.uid)
            prod[index] = {uid, name, marcas: {uid: prod[index].marcas.uid, name: marca}, quantidade}
            setProdutos(prod)
            setTitle('Editar Produto') 
            setEditando(true) 
            
        }else {
            setTitle('Criar Produto')



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
                            id="produto"
                            label="Produto"
                            value={name}
                            onChange={(event)=> handleNomeChange(event.target.value)}
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="marca"
                            label="Marca"
                            type="text"
                            value={marca}
                            onChange={(event)=> handleMarcaChange(event.target.value)}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="quantidade"
                            label="Quantidade"
                            type="number"
                            onChange={(event)=> handleQuantidadeChange(event.target.value)}
                            value={quantidade}
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

                <Typography variant="h3" className={classes.header}>Produtos</Typography>
                <div className={classes.tabela}>
                    <TabelaDeProdutos handleOpen={handleOpen} produtosProp={produtos}/>
                    <div >
                        <Button onClick={()=>handleOpen(false)}>Novo Produto</Button>
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


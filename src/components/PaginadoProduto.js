import React, {useState, useEffect, useContext} from 'react';
import TabelaDeProdutos from './TabelaDeProdutos';
import PaginaInicial from './PaginaInicial';
import NavBar from './NavBar';
import ServicoDeProdutos from '../servicos/ServicoDeProdutos';
import AuthContext from '../context/AuthContext'
import { makeStyles, Typography, Button, Dialog, DialogContent, DialogTitle, TextField, DialogActions} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ServicoDeMarcas from '../servicos/ServicoDeMarcas';


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
    const [marcas, setMarcas] = useState([])
    

    const servicoDeProdutos = new ServicoDeProdutos()
    const servicoDeMarcas = new ServicoDeMarcas()

    

  
    useEffect(()=>{
      servicoDeProdutos.getProdutos().then((res)=>{
          setProdutos(res.produtos)

        })
        servicoDeMarcas.getMarcas().then((res)=>{
            console.log(res.marcas)
            setMarcas(res.marcas)
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
             servicoDeProdutos.putProduto({name, marca_uid: marca, quantidade} , uid)
             .then((res)=> {
                 context.setSuccessMessage('Produto Salvo com sucesso!')
                 context.setIsSuccessOpen(true)
             }).catch((err)=> {
                context.setErrorMessage('Nao foi possivel salvar o produto!')
                context.setIsErrorOpen(true)
             })
             setOpen(false)
        }else {
            servicoDeProdutos.postProduto({name, marca_uid: marca, quantidade})
             .then((res)=> {
                //  produtos.push(res.data.produto)
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
                         <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Marca</InputLabel>
                                <Select
                                    labelId="marcas-label"
                                    id="marcas-select"
                                    value={marca}
                                    onChange={(event)=> handleMarcaChange(event.target.value)}
                                >
                            {marcas.map((marca)=> (<MenuItem value={marca.uid}>{marca.name}</MenuItem>))} 
                            
                            </Select>
                        </FormControl>
                       
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
    },
    formControl: {
        margin: '8px',
        width: '100%'
      },
      selectEmpty: {
        marginTop: '16px',
      },
  });


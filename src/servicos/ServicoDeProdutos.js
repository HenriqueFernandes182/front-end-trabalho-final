import ClienteApi from '../cliente/ClienteApi';
import Axios from 'axios';

export default class ServicoDeProdutos {
    constructor(clienteApi) {
        this.clienteApi = clienteApi || new ClienteApi('https://conclusion-work-backend.herokuapp.com')
    }

    getProdutos() {
        return new Promise( (resolve, reject) => {
            this.clienteApi.get(`https://conclusion-work-backend.herokuapp.com/produtos`)
                .then( response => {
                    resolve(response.data)
                }).catch( err => {
                    reject( err )} )
        })
    }

    putProduto(putBody, id) {
        return new Promise( (resolve, reject) => {
            this.clienteApi.put(`https://conclusion-work-backend.herokuapp.com/produtos/${id}`, putBody)
                .then(response => {
                    if(response === 'error') reject("Um erro aconteceu")
                    else resolve(response)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    postProduto(putBody) {
        const name = putBody.name
        const quantidade = putBody.quantidade
        const marca_nome = putBody.marca_nome

        return new Promise( (resolve, reject) => {
            this.clienteApi.post(`https://conclusion-work-backend.herokuapp.com/produtos/`, {name, quantidade, marca_nome})
                .then(response => {
                    if(response === 'error') reject("Um erro aconteceu")
                    else resolve(response)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}
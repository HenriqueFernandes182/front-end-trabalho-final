import ClienteApi from '../cliente/ClienteApi';
import Axios from 'axios';

export default class ServicoDeMarcas {
    constructor(clienteApi) {
        this.clienteApi = clienteApi || new ClienteApi('https://conclusion-work-backend.herokuapp.com')
    }

    getMarcas() {
        return new Promise( (resolve, reject) => {
            this.clienteApi.get(`https://conclusion-work-backend.herokuapp.com/marcas`)
                .then( response => {
                    resolve(response.data)
                }).catch( err => {
                    reject( err )} )
        })
    }

    putMarcas(putBody, id) {
        return new Promise( (resolve, reject) => {
            this.clienteApi.put(`https://conclusion-work-backend.herokuapp.com/marcas/${id}`, putBody)
                .then(response => {
                    if(response === 'error') reject("Um erro aconteceu")
                    else resolve(response)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    postMarcas(putBody) {
        const name = putBody.name
        return new Promise( (resolve, reject) => {
            this.clienteApi.post(`https://conclusion-work-backend.herokuapp.com/marcas/`, {name})
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
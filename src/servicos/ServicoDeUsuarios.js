import ClienteApi from '../cliente/ClienteApi';
import Axios from 'axios'

export default class ServicoDeUsuario {
    constructor(clienteApi) {
        this.clienteApi = clienteApi || new ClienteApi('https://conclusion-work-backend.herokuapp.com')
    }

    getUsuarios() {
        return new Promise( (resolve, reject) => {
            this.clienteApi.get(`https://conclusion-work-backend.herokuapp.com/users`)
                .then( response => {
                    resolve(response.data)
                }).catch( err => {
                    reject(err)})
        })
    }

    getUsuario(uid) {
        return new Promise((resolve, reject) => {
            this.clienteApi.get(`https://conclusion-work-backend.herokuapp.com/users${uid}`)
                .then( response => {
                    resolve(response.data)
                }).catch(err => reject(err))
        })
    }

     putUsuario(putBody, id) {
        return new Promise( (resolve, reject) => {
            this.clienteApi.put(`https://conclusion-work-backend.herokuapp.com/users/${id}`, putBody)
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
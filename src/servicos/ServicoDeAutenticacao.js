import ClienteApi from '../cliente/ClienteApi';

export default class ServicoDeAutenticacao {
    constructor(clienteApi) {
        this.clienteApi = clienteApi || new ClienteApi('https://conclusion-work-backend.herokuapp.com/')
    }

   autenticarUsuario(usuario) {
        const email = usuario.email
        const password = usuario.password

        return new Promise((resolve, reject) => {
            this.clienteApi.post('http://localhost:3333/login', { email, password})
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    criarUsuario(usuario) {
        const email = usuario.email
        const password = usuario.password
        const name = usuario.name

        return new Promise((resolve, reject) => {
            this.clienteApi.post('http://localhost:3333/users', { email, password, name })
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

}
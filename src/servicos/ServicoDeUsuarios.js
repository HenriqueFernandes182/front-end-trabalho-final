import ClienteApi from '../cliente/ClienteApi';
import Axios from 'axios'

export default class ServicoDeUsuario {
    constructor(clienteApi) {
        this.clienteApi = clienteApi || new ClienteApi('http://localhost:3333/')
    }

    getUsuarios() {
        return new Promise( (resolve, reject) => {
            this.clienteApi.get(`http://localhost:3333/users`)
                .then( response => {
                    resolve(response.data)
                }).catch( err => {
                    reject(err)})
        })
    }

    getUsuario(uid) {
        return new Promise((resolve, reject) => {
            this.clienteApi.get(`http://localhost:3333/users/${uid}`)
                .then( response => {
                    resolve(response.data)
                }).catch(err => reject(err))
        })
    }

     putUsuario(putBody, id) {
        return new Promise( (resolve, reject) => {
            this.clienteApi.put(`http://localhost:3333/users/${id}`, putBody)
                .then(response => {
                    if(response === 'error') reject("Um erro aconteceu")
                    else resolve(response)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    

    // getProjects() {
    //     return new Promise((resolve, reject) => {
    //         this.apiClient.get('projects')
    //             .then(response => {
    //                 resolve(response.data)
    //             }).catch(err => {
    //                 if (err.response && err.response.data) {
    //                     reject(err.response.data.message)
    //                 } else {
    //                     reject("Unable to load projects. Please try again.")
    //                 }
    //             })
    //     })
    // }

    // getContracts() {
    //     return new Promise((resolve, reject) => {
    //         this.apiClient.get('contracts')
    //             .then(response => {
    //                 resolve(response.data)
    //             }).catch(err => {
    //                 if (err.response && err.response.data) {
    //                     reject(err.response.data.message)
    //                 } else {
    //                     reject("Unable to load contracts. Please try again.")
    //                 }
    //             })
    //     })
    // }

    // postProject(name) {
    //     const contract_name = '', contract_number = ''
    //     return new Promise((resolve, reject) => {
    //         this.apiClient.post('project', { name, contract_name, contract_number})
    //             .then(response => {
    //                 resolve(response.data)
    //             })
    //             .catch(err => {
    //                 if (err.response && err.response.data) reject(err.response.data.message)
    //                 else reject('Unable to save project. Please try again.')
    //             })
    //     })
    // }

    // putProject(putBody, id) {
    //     return new Promise( (resolve, reject) => {
    //         this.apiClient.put(`project/${id}`, putBody)
    //             .then(response => {
    //                 if(response === 'error') reject("Unable to save changes to project. Please try again.")
    //                 else resolve(response)
    //             })
    //             .catch(err => {
    //                 if (err.response && err.response.data)
    //                     reject(err.response.data.message)
    //                 else reject('Unable to save changes to project. Please try again')
    //             })
    //     })
    // }

    // postContract(name, pid) {
    //     return new Promise((resolve, reject) => {
    //         this.apiClient.post(`project/${pid}/contract`, { name })
    //             .then(response => {
    //                 const { id, name } = response.data
    //                 resolve({ id, name })
    //             })
    //             .catch(err => {
    //                 if (err.response && err.response.data) reject(err.response.data.message)
    //                 else reject('Unable to save contract. Please try again.')
    //             })
    //     })
    // }

    // postContractToProject(pid, cid, name) {
    //     return new Promise((resolve, reject) => {
    //         this.apiClient.post(`project/${pid}/contract/${cid}`, { name })
    //             .then(response => {
    //                 const { id, name } = response.data
    //                 resolve({ id, name })
    //             })
    //             .catch(err => {
    //                 if (err.response && err.response.data) reject(err.response.data.message)
    //                 else reject('Unable to save contract to project. Please try again.')
    //             })
    //     })
    // }

    // putContract(id, name, contractNumber) {
    //     const putBody = { contract_number: contractNumber, name }
    //     return new Promise((resolve, reject) => {
    //             this.apiClient.put(`contract/${id}`, putBody)
    //                 .then(response => {
    //                     if (response === 'error') reject("Unable to save changes to contract. Please try again.")
    //                     else resolve(response)
    //                 })
    //                 .catch(err => {
    //                     if (err.response && err.response.data)
    //                         reject(err.response.data.message)
    //                     else reject('Unable to save changes to contract. Please try again')
    //                 })
    //     })
    // }

}
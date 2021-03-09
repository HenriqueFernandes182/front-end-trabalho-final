let axios = require('axios')

export default class ClienteApi {

    constructor(url) {
        this.url = 'http://localhost:3333';
        this.axios = axios.create({
            baseUrl: url
        })
    }

    get(endpoint) {
        return this.axios({url: endpoint, headers: {'x-access-token': window.localStorage.getItem('token')}})
    }

    post(url, data) {
        return this.axios({
            method: 'post',
            url,
            data
        })

    }
    
    put(url, data) {
        return this.axios({
            method: 'put',
            url,
            data,
            headers: {'x-access-token': window.localStorage.getItem('token')}
        })
    }



}
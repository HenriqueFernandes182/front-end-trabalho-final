let axios = require('axios')

export default class ClienteApi {

    constructor(url) {
        this.url = 'https://conclusion-work-backend.herokuapp.com';
        this.axios = axios.create({
            baseUrl: process.env.REACT_APP_API_URL
        });
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
const axios = require('axios');

var baseUrl

if(process.env.NODE_ENV === 'development') {
  baseUrl = 'http://livesaude.guilhermegonzales.com.br/';
} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'http://livesaude.guilhermegonzales.com.br/';
} else {
  baseUrl = 'http://livesaude.guilhermegonzales.com.br/'
}

const api = axios.create({
  baseURL: baseUrl
})

const TOKEN = window.localStorage.getItem('token')

export { api, TOKEN }

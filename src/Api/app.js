const axios = require('axios');

var baseUrl

if(process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3000';
  //baseUrl = 'https://livesaude.guilhermegonzales.com.br/';

} else if (process.env.NODE_ENV === 'test') {
  baseUrl = 'http://localhost:3000';
  //baseUrl = 'https://livesaude.guilhermegonzales.com.br/';

} else {
  baseUrl = 'http://localhost:3000';
  //baseUrl = 'https://livesaude.guilhermegonzales.com.br/';

}

const api = axios.create({
  baseURL: baseUrl
})

const TOKEN = window.localStorage.getItem('token')

export { api, TOKEN }

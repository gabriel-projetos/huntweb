import axios from 'axios';

//todas a req partem dessa url
//Facilita para chamadas rest 
const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'});

//Expondo configuração
export default api;
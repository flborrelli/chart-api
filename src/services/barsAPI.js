import axios from 'axios';

const barsAPI = axios.create({
  baseURL: 'https://private-afe609-testefront.apiary-mock.com/anual-result',
})

export default barsAPI;
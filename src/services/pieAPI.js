import axios from 'axios';

const pieAPI = axios.create({
  baseURL: 'https://private-afe609-testefront.apiary-mock.com/anual-percentage',
})

export default pieAPI;
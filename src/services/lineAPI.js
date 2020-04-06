import axios from 'axios';

const lineAPI = axios.create({
  baseURL: 'https://private-afe609-testefront.apiary-mock.com/time-data',
})

export default lineAPI;
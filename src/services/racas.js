import axios from 'axios';

export default class RacaService {
  async getRaca() {
    const response = await axios.get('/racas/');
    return response.data.results;
  }

  async createRacas(raca) {
    const response = await axios.post('/racas/', raca);
    return response.data;
  }
}
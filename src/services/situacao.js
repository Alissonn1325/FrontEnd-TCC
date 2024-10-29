import axios from 'axios';

export default class SituacaoService {
  async getSituacao() {
    const response = await axios.get('/situacoes/');
    return response.data.results;
  }
}
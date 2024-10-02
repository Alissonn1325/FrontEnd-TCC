import axios from 'axios';

export default class AnimaisApi {
  async buscarTodosOsAnimais() {
    const response = await axios.get('/animais/');
    return response.data.results;
  }

  async adicionarAnimal(animal) {
    const response = await axios.post('/animais/', animal);
    return response.data;
  }
}
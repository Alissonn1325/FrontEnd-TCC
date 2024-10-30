import axios from 'axios';

export default class AnimalService {
  async getAnimal() {
    const response = await axios.get('/animais/');
    return response.data.results;
  }

  async getAnimalByRaca(raca_id) {
    const response = await axios.get(`/animais/?raca__id=${raca_id}`);
    return response.data.results;
  }

  async createAnimal(animal) {
    const response = await axios.post('/animais/', animal);
    return response.data;
  }

  async getSexo() {
    const response = await axios.get('/animais/');
    return response.data.results;
  }
}
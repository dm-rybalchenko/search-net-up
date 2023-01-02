import DATA from './discover';

export default class FilmService {
  static async getAll() {
    await fakeServerDelay(1000);

    return DATA;
  }

  static async getBySearchQuery(query: string) {
    const response = { ...DATA };
    response.items = response.items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    await fakeServerDelay(1000);

    return response;
  }
}

const fakeServerDelay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));

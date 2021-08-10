export default class APIService {
  #url;

  constructor(url) {
    this.#url = url;
  }
  async getResource(path) {
    const res = await fetch(`${this.#url}${path}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this.#url}${path}, status ${ res.status }`);
    }

    return await res.json();
  };

  getAllCharacters() {
    return this.getResource(`/characters?page=5&pageSize=10`);
  }

  getCharacter(id) {
    return this.getResource(`/characters/${ id }`);
  }
}

export default class APIService {
  #url;

  constructor(url) {
    this.#url = url;
  }

  async getResource(path) {
    const res = await fetch(`${ this.#url }${ path }`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${ this.#url }${ path }, status ${ res.status }`);
    }

    return await res.json();
  };

  async getAllBooks() {
    const result = await this.getResource(`/books/`);
    return result.map(this._transformBook);
  }

  async getBook(id) {
    const result = await this.getResource(`/books/${ id }/`);
    return this._transformBook(result);
  }

  async getAllCharacters() {
    const result = await this.getResource(`/characters?page=5&pageSize=10`);
    return result.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const result = await this.getResource(`/characters/${ id }`);
    return this._transformCharacter(result);
  }

  async getAllHouses() {
    const result = await this.getResource(`/houses/`);
    return result.map(this.getAllHouses);
  }

  async getHouse(id) {
    const result = await this.getResource(`/houses/${ id }/`);
    return this._transformHouse(result);
  }

  _transformCharacter(data) {
    return {
      name: data.name,
      gender: data.gender,
      born: data.born,
      died: data.died,
      culture: data.culture
    };
  }

  _transformHouse(data) {
    return {
      name: data.name,
      region: data.region,
      words: data.words,
      titles: data.titles,
      overlord: data.overlord,
      ancestralWeapons: data.ancestralWeapons
    };
  }

  _transformBook(data) {
    return {
      name: data.name,
      numberOfPages: data.numberOfPages,
      publisher: data.publisher,
      released: data.released
    };
  }
}

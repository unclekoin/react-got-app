export default class APIService {
  #url;

  constructor(url) {
    this.#url = url;
  }

  getResource = async (path) => {
    const res = await fetch(`${ this.#url }${ path }`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${ this.#url }${ path }, status ${ res.status }`);
    }

    return await res.json();
  };

  getAllBooks = async () => {
    const result = await this.getResource(`/books/`);
    return result.map(this._transformBook);
  }

  getBook = async (id) => {
    const result = await this.getResource(`/books/${ id }/`);
    return this._transformBook(result);
  }

  getAllCharacters = async () => {
    const result = await this.getResource(`/characters/?page=5&pageSize=10`);
    return result.map(this._transformCharacter);
  }

  getCharacter = async (id) => {
    const result = await this.getResource(`/characters/${ id }`);
    return this._transformCharacter(result);
  }

  getAllHouses = async () => {
    const result = await this.getResource(`/houses/`);
    return result.map(this._transformHouse);
  }

  getHouse = async (id) => {
    const result = await this.getResource(`/houses/${ id }/`);
    return this._transformHouse(result);
  }

  _transformCharacter = (data) => {
    return {
      id: String(data.url.split('/')[data.url.split('/').length - 1]),
      name: data.name,
      gender: data.gender,
      born: data.born,
      died: data.died,
      culture: data.culture
    };
  }

  _transformHouse = (data) => {
    return {
      id: String(data.url.split('/')[data.url.split('/').length - 1]),
      name: data.name,
      region: data.region,
      words: data.words,
      titles: data.titles,
      overlord: data.overlord,
      ancestralWeapons: data.ancestralWeapons
    };
  }

  _transformBook = (data) => {
    return {
      id: String(data.url.split('/')[data.url.split('/').length - 1]),
      name: data.name,
      numberOfPages: data.numberOfPages,
      publisher: data.publisher,
      released: data.released
    };
  }
}

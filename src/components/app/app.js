import React from 'react';
import APIService from '../../services/api-service';

const App = () => {

  const service = new APIService('https://www.anapioficeandfire.com/api');
  service.getAllCharacters()
    .then((data) => data.forEach((item) => console.log(item.name)));
  service.getCharacter(55)
    .then((item) => console.log(item));

  return (
    <div>
      <h1>Game of Thrones App</h1>
    </div>
  );
};

export default App;

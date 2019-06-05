export const getQuotes = (char, num) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://futuramaapi.herokuapp.com/api/characters/${char}/${num}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      origin: null
    }
  })
    .then(res => {
      return res.json();
    });
};
  

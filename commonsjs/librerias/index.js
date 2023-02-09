import axios from 'axios';

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function (response) {
    // handle success
    console.log(response);
    console.log('success');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log('error!');
  })
  .finally(function () {
    // always executed
  });
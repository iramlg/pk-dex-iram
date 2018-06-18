const ActionTypes = {
  LIST_RECEIVE: 'LIST/RECEIVE',
  POKEMON_REQUEST: 'POKEMON/REQUEST',
  POKEMON_RECEIVE: 'POKEMON/RECEIVE',
};

const receiveList = (payload) => ({
  type: ActionTypes.LIST_RECEIVE,
  payload,
});

const requestGetPokemon = (payload) => ({
  type: ActionTypes.POKEMON_REQUEST,
});

const receivePokemon = (payload) => ({
  type: ActionTypes.POKEMON_RECEIVE,
  payload,
});


const clearPokemon = (dispatch) => {
  dispatch(receivePokemon());
}

const fetchList = (dispatch) => {
  dispatch(receiveList([]));

  return fetch('https://pokeapi.co/api/v2/pokemon/?limit=950')
    .then((response) => {
      response.json().then((data) => {
        dispatch(receiveList(data.results));
      });
    })
    .catch((err) => {
      console.log('Failed retrieving information', err);
    });
};

const getPokemon = (dispatch, url ) => {
  dispatch(requestGetPokemon());

  return fetch(url)
    .then((response) => {
      response.json().then((data) => {
        dispatch(receivePokemon(data));
      });
    })
    .catch((err) => {
      console.log('Failed retrieving information', err);
    });
};

module.exports = {
  ActionTypes,
  fetchList,
  getPokemon,
  clearPokemon,
};

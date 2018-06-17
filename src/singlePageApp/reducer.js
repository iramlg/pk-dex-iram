const { ActionTypes } = require('./actions');

const initialState = {
  list: [],
  loadingDetailBlock: false,
  pokemon: null,
};

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LIST_RECEIVE:
      return {
        ...state,
        list: action.payload,
      };

    case ActionTypes.POKEMON_REQUEST:
      return {
        ...state,
        loadingDetailBlock: true,
        pokemon: null,
      };

    case ActionTypes.POKEMON_RECEIVE:
      return {
        ...state,
        loadingDetailBlock: false,
        pokemon: action.payload,
      };

    default:
      return state;
  }
};

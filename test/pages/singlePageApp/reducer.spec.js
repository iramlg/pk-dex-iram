const Reducer = require('../../../src/singlePageApp/reducer');
const { ActionTypes } = require('../../../src/singlePageApp/actions');

const mockInitialState = {
  list: [],
  loadingDetailBlock: false,
  pokemon: null,
};

describe('Pages -> singlePageApp -> Reducer', () => {
  it('default', () => {
    expect(Reducer(undefined, {})).toEqual(mockInitialState);
  });

  it('receive list', () => {
    expect(Reducer(undefined, {
      type: ActionTypes.LIST_RECEIVE,
      payload: [1,2,3],
    })).toEqual({
      list: [1,2,3],
      loadingDetailBlock: false,
      pokemon: null,
    });
  });

  it('request pokemon', () => {
    expect(Reducer(undefined, {
      type: ActionTypes.POKEMON_REQUEST,
      payload: null,
    })).toEqual({
      list: [],
      loadingDetailBlock: true,
      pokemon: null,
    });
  });

  it('receive pokemon', () => {
    expect(Reducer(undefined, {
      type: ActionTypes.POKEMON_RECEIVE,
      payload: {
        name: 'test'
      },
    })).toEqual({
      list: [],
      loadingDetailBlock: false,
      pokemon: {
        name: 'test'
      },
    });
  });
});

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


  // it('request', () => {
  //   expect(Reducer(undefined, {
  //     type: ActionTypes.ITEMS_EAN_REQUEST,
  //   })).toEqual(mockInitialState);
  //
  //   expect(Reducer({ abc: 1 }, {
  //     type: ActionTypes.ITEMS_EAN_REQUESTSAVE,
  //   })).toEqual({
  //     abc: 1,
  //     loadingFullscreen: true,
  //     errorValidation: '',
  //   });
  // });
  //
  // it('receive', () => {
  //   expect(Reducer({ abc: 1 }, {
  //     type: ActionTypes.ITEMS_EAN_RECEIVE,
  //     payload: {
  //       variationId: 'variationId',
  //       ean: 'code',
  //       withoutCode: 'withoutCode',
  //     },
  //   })).toEqual({
  //     abc: 1,
  //     loadingBlock: false,
  //     variationId: 'variationId',
  //     ean: 'code',
  //     withoutCode: 'withoutCode',
  //     error: '',
  //   });
  //
  //   expect(Reducer({ abc: 1 }, {
  //     type: ActionTypes.ITEMS_EAN_RECEIVE,
  //     error: 'test',
  //     payload: {
  //       variationId: 'variationId',
  //       ean: 'code',
  //       withoutCode: 'withoutCode',
  //     },
  //   })).toEqual({
  //     abc: 1,
  //     loadingBlock: false,
  //     variationId: 'variationId',
  //     ean: 'code',
  //     withoutCode: 'withoutCode',
  //     error: {
  //       variationId: 'variationId',
  //       ean: 'code',
  //       withoutCode: 'withoutCode',
  //     },
  //   });
  //
  //   expect(Reducer({ abc: 1 }, {
  //     type: ActionTypes.ITEMS_EAN_RECEIVESAVE,
  //     payload: {
  //       error: {
  //         a: 1,
  //       },
  //     }
  //   })).toEqual({
  //     abc: 1,
  //     loadingBlock: false,
  //     loadingFullscreen: false,
  //     error: {
  //       a: 1
  //     },
  //   });
  //
  //   expect(Reducer({ abc: 1}, {
  //     type: ActionTypes.ITEMS_EAN_CHANGE,
  //     payload: {
  //       a: 1
  //     }
  //   })).toEqual({
  //     abc: 1,
  //     a: 1,
  //   })
  // });
  //
  // it('change', () => {
  //   expect(Reducer({ abc: 1 }, {
  //     type: ActionTypes.ITEMS_EAN_CHANGE,
  //     payload: {
  //       variationId: 'variationId',
  //       ean: 'code',
  //       withoutCode: 'withoutCode',
  //     },
  //   })).toEqual({
  //     abc: 1,
  //     variationId: 'variationId',
  //     ean: 'code',
  //     withoutCode: 'withoutCode',
  //   });
  // });
});

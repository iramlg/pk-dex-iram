const React = require('react');
const { SinglePageApp } = require('../../../src/singlePageApp');
const renderer = require('react-test-renderer');
const { shallow }  = require('enzyme');

jest.mock('../../../src/components/pokemonDetails', () => 'PokemonDetails');
jest.mock('../../../src/components/pokemonList', () => 'PokemonList');

let receiveDispatch_clearPokemon;
let receiveDispatch_getPokemon;
let receiveState;
let receiveView;

jest.mock('../../../src/singlePageApp/actions', () => ({
  clearPokemon: (dispatch) => {
    receiveDispatch_clearPokemon = dispatch;
  },
  getPokemon: (dispatch) => {
    receiveDispatch_getPokemon = dispatch;
  }
}));

jest.mock('react-redux', () => ({
  connect: (state, dispatch) => {
    receiveState = state({
      singlePageApp: {
        list: [],
        loadingDetailBlock: false,
        pokemon: null,
      }
    });

    const dispatchInst = dispatch('dispatch');
    dispatchInst.getPokemon();
    dispatchInst.clearPokemon();

    return (view) => {
      receiveView = view;
    };
  },
}));

const mockProps = {
  list: [],
  loadingDetailBlock: false,
  pokemon: null,
}

let instance;

describe('<SinglePageApp />', () => {
  describe('render', () => {
    it('test empty', () => {
      const component = renderer.create(<SinglePageApp { ...mockProps } />).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('test loading', () => {
      const newMock = Object.assign({}, mockProps, { loadingDetailBlock: true });
      const localInstance = shallow(<SinglePageApp { ...newMock } />).instance();
      const elm = renderer.create(localInstance.renderPokemonDetails()).toJSON();
      expect(elm).toMatchSnapshot();
    });

    it('test selected pokemon', () => {
      const newMock = Object.assign({}, mockProps, { pokemon: { name: 'test' } });
      const localInstance = shallow(<SinglePageApp { ...newMock } />).instance();
      const elm = renderer.create(localInstance.renderPokemonDetails()).toJSON();
      expect(elm).toMatchSnapshot();
    });
  });
});

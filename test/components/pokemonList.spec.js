const React = require('react');
const PokemonList = require('../../src/components/pokemonList');
const renderer = require('react-test-renderer');

describe('<PokemonList />', () => {
  describe('render', () => {
    it('test rendering', () => {
      const component = renderer.create(<PokemonList getPokemon={ jest.fn() } list={ [{name: 'name', url: 'url'}] }  />).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('test empty list', () => {
      const component = renderer.create(<PokemonList getPokemon={ jest.fn() } list={ [] }  />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('Props', () => {
    it('types', () => {
      expect(Object.keys(PokemonList.propTypes).length).toBe(2);

      ['list', 'getPokemon'].forEach(prop => {
        expect(PokemonList.propTypes[prop]).toBeTruthy();
      });

    });
  });
});

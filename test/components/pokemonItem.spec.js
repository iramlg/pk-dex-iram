const React = require('react');
const PokemonItem = require('../../src/components/pokemonItem');
const renderer = require('react-test-renderer');
const { shallow } = require('enzyme');

describe('<PokemonItem />', () => {
  describe('render', () => {
    it('test rendering', () => {
      const component = renderer.create(<PokemonItem getPokemon={ jest.fn() } pokemon={ {name: 'name', url: 'url'} } />).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('test render instance', () => {
      const handleGetPokemon = jest.fn();
      const localInstance = shallow(<PokemonItem getPokemon={ handleGetPokemon } pokemon={ {name: 'name', url: 'url'} } />);
      localInstance.simulate('click');
      expect(handleGetPokemon).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('types', () => {
      expect(Object.keys(PokemonItem.propTypes).length).toBe(2);

      ['pokemon', 'getPokemon'].forEach(prop => {
        expect(PokemonItem.propTypes[prop]).toBeTruthy();
      });

    });
  });
});

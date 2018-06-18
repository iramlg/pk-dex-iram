const React = require('react');
const PokemonDetails = require('../../src/components/pokemonDetails');
const renderer = require('react-test-renderer');
const { shallow } = require('enzyme');

const mockPokemon = {
  name: 'name',
  weight: 50,
  height: 30,
  sprites: {
    front_default: 'front_default'
  },
  types: [
    {
      name: 'name',
      type: {
        name: 'type_name'
      }
    }
  ]
}

describe('<PokemonDetails />', () => {
  describe('render', () => {
    it('test rendering', () => {
      const component = renderer.create(<PokemonDetails clearPokemon={ jest.fn() } pokemon={ mockPokemon }  />).toJSON();
      expect(component).toMatchSnapshot();
    });

    it('test render instance', () => {
      const handleClearPokemon = jest.fn();
      const localInstance = shallow(<PokemonDetails clearPokemon={ handleClearPokemon } pokemon={ mockPokemon }  />);
      localInstance.find('.back-button').simulate('click');
      expect(handleClearPokemon).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('types', () => {
      expect(Object.keys(PokemonDetails.propTypes).length).toBe(2);

      ['pokemon', 'clearPokemon'].forEach(prop => {
        expect(PokemonDetails.propTypes[prop]).toBeTruthy();
      });

    });
  });
});

const React = require('react');
const PropTypes = require('prop-types');
const PokemonItem = require('./pokemonItem');

class pokemonList extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    getPokemon: PropTypes.func.isRequired,
  };

  render() {
    const { list, getPokemon } = this.props;

    return !list.length ? null : (
      <div className='item-list'>
        { list.map((pokemon, index) => (
          <PokemonItem
            key={ index }
            pokemon={ pokemon }
            getPokemon={ getPokemon }
          />
        )) }
      </div>
    );
  }
}

module.exports = pokemonList;

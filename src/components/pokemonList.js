const React = require('react');
const PropTypes = require('prop-types');
const PokemonItem = require('./pokemonItem');

const pokemonList = ({ list, getPokemon }) => (
  <div className="item-list">
    { list.map(pokemon => (
      <PokemonItem
        key={ pokemon.name }
        pokemon={ pokemon }
        getPokemon={ getPokemon }
      />
    )) }
  </div>
);

pokemonList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPokemon: PropTypes.func.isRequired,
};

module.exports = pokemonList;

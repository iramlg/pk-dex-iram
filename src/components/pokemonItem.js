const React = require('react');
const PropTypes = require('prop-types');

const PokemonItem = ({ getPokemon, pokemon }) => {
  return (
    <div
      className="pokemon-item"
      onClick={() => { getPokemon(pokemon.url) }}>
      <span>{ pokemon.name.toUpperCase() }</span>
    </div>
  )
}

PokemonItem.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  getPokemon: PropTypes.func.isRequired,
};

module.exports = PokemonItem;

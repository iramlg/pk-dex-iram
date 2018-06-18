const React = require('react');
const PropTypes = require('prop-types');

const PokemonDetails = ({ clearPokemon, pokemon }) => (
  <div className="pokemon-details">
    <span className="back-button" onClick={ () => { clearPokemon(); } }>BACK</span>
    <img className="sprite" alt={ pokemon.name } src={ pokemon.sprites.front_default } />
    <div className="more-info">
      <p>{ pokemon.name.toUpperCase() }</p>
      <p>HT { pokemon.height }</p>
      <p>WT { pokemon.weight }</p>
      <div className="pokemon-details-types">
        { pokemon.types.map(type => (<span key={ type.type.name }>{ type.type.name.toUpperCase() }</span>)) }
      </div>
    </div>
  </div>
);

PokemonDetails.propTypes = {
  clearPokemon: PropTypes.func.isRequired,
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
  }),
};

PokemonDetails.defaultProps = {
  pokemon: {},
};

module.exports = PokemonDetails;

const React = require('react');
const PropTypes = require('prop-types');

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <img className="sprite" src={ pokemon.sprites.front_default } />
      <div className="more-info">
        <p>{ pokemon.name.toUpperCase() }</p>
        <p>HT { pokemon['height'] }</p>
        <p>WT { pokemon.weight }</p>
        <div className="pokemon-details">
          { pokemon.types.map((type, index) => {
            return <span key={ index }>{ type.type.name.toUpperCase() }</span>
          }) }
        </div>
      </div>
    </div>
  )
}

PokemonDetails.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

module.exports = PokemonDetails;

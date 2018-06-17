const React = require('react');
// const PropTypes = require('prop-types');

const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      <img src={ pokemon.sprites.front_default } />
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

module.exports = PokemonDetails;

const React = require('react');

const PokemonItem = ({ getPokemon, pokemon }) => {
  return (
    <div
      className="pokemon-item"
      onClick={() => { getPokemon(pokemon.url) }}>
      <span>{ pokemon.name.toUpperCase() }</span>
    </div>
  )
}

module.exports = PokemonItem;

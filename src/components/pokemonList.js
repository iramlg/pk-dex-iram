const React  = require('react');
// const PropTypes = require('prop-types');
const PokemonItem = require('./pokemonItem');

class pokemonList extends React.Component {
  // static propTypes = {
  //   list: PropTypes.arrayOf(PropTypes.object).isRequired,
  //   orderId: PropTypes.string.isRequired,
  //   linkText: PropTypes.string,
  //   multi: PropTypes.number,
  // };

  // static defaultProps = {
  //   layout: '',
  //   linkText: '',
  //   multi: 0,
  // };

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

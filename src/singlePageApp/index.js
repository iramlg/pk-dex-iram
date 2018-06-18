const React =  require('react');
const { connect } = require('react-redux');

const PokemonDetails = require('../components/pokemonDetails');
const PokemonList = require('../components/pokemonList');
const { clearPokemon, getPokemon } = require('./actions');

const mapStateToProps = ({ singlePageApp }) => ({
  list: singlePageApp.list,
  loadingDetailBlock: singlePageApp.loadingDetailBlock,
  pokemon: singlePageApp.pokemon,
});

const mapDispatchToProps = dispatch => ({
  clearPokemon: () => clearPokemon(dispatch),
  getPokemon: (url) => getPokemon(dispatch, url),
});

@connect(mapStateToProps, mapDispatchToProps)
export class SinglePageApp extends React.Component {
  renderPokemonDetails() {
    const { clearPokemon, loadingDetailBlock, pokemon } = this.props;

    if (loadingDetailBlock) {
      return (<div className="pokedex-details">Carregando...</div>)
    }

    return (pokemon) ? (
      <div className="pokedex-details">
        <PokemonDetails
          pokemon={ pokemon }
          clearPokemon={ clearPokemon }
        />
      </div>
    ) : null;
  }

	render() {
		return (
			<div>
				<div className="header">
					<h1>Pokedex</h1>
				</div>
				<div className="content">
					<div className="menu-select">
            <PokemonList
              list={ this.props.list }
              getPokemon={ this.props.getPokemon }
            />
					</div>
          { this.renderPokemonDetails() }
				</div>
			</div>
		)
	}
}

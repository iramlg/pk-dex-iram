const React =  require('react');
const { connect } = require('react-redux');

const PokemonDetails = require('../components/pokemonDetails');
const PokemonList = require('../components/pokemonList');
const { getPokemon } = require('./actions');

const mapStateToProps = ({ singlePageApp }) => ({
  list: singlePageApp.list,
  loadingDetailBlock: singlePageApp.loadingDetailBlock,
  pokemon: singlePageApp.pokemon,
});

const mapDispatchToProps = dispatch => ({
  getPokemon: (url) => getPokemon(dispatch, url),
});

@connect(mapStateToProps, mapDispatchToProps)
export class SinglePageApp extends React.Component {
  renderPokemonDetails() {
    const { loadingDetailBlock, pokemon } = this.props;

    if (loadingDetailBlock) {
      return (<p>loading</p>)
    }

    return (pokemon) ? <PokemonDetails
      pokemon={ this.props.pokemon }
    /> : null;
  }

	render() {
		return (
			<div>
				<div className="header">
					<h1>Pokedex</h1>
				</div>
				<div className="content">
					<div className="menu-select">
					 	<p>Select dsasadsda  das ads</p>
            { this.renderPokemonDetails() }
            <PokemonList
              list={ this.props.list }
              getPokemon={ this.props.getPokemon }
            />
					</div>
				</div>
			</div>

		)
	}
}

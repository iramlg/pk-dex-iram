const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const store = require('./store')();

const { SinglePageApp } = require('./singlePageApp');
const { fetchList } = require('./singlePageApp/actions');

fetchList(store.dispatch);

const App = () => (
  <Provider store={ store }>
    <SinglePageApp />
  </Provider>
);

export default App;

document.getElementsByClassName("carregarReact")[0].addEventListener("click", () => {
	ReactDOM.hydrate(<App />, document.getElementById('app'));
})


import React, { Component } from 'react';
import ReactDom, { render } from 'react-dom';

import '../sass/main.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      logo: 'Logo',
    }
  }

  handleClick() {
    this.setState({
      logo: 'Joker INC.'
    });
  }

  render() {
    return (
      <div className="App">
        <Header logo={ this.state.logo }/>
        <Hero text={ this.state.text }  clickCallback={ () => this.handleClick() }/>
        <input type="text"/>
      </div>
    );
  }
}

export default App;

const Header = ({ logo }) => (
  <div className="header">
    <h2 className="logo">{ logo }</h2>
    <nav>
      <a href="#">page 01</a>
      <a href="#">page 02</a>
      <a href="#">page 03</a>
    </nav>
  </div>
);

const Hero = ({ clickCallback }) => (
  <div className="hero">
    <div className="container">
      <h1 className="title">Why so serious?</h1>
      <button onClick={() => clickCallback() }>DO MAGIC</button>
    </div>
  </div>
);

render(
  <App />,
  document.getElementById('app')
);
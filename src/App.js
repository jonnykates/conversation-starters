import React, { Component } from "react";
import Starters from "./sampleStarters";

class App extends Component {
  state = {
    starters: Starters,
    selectedStarter: ''
  };

  getRandomStarter = (e) => {
    const randomStarter = this.state.starters[Math.floor(Math.random() * this.state.starters.length)];
    this.setState({ selectedStarter: randomStarter });
  };

  componentDidMount() {
    this.getRandomStarter();
  }

  render() {
    return (
      <div className="App" onClick={() => this.getRandomStarter()}>
        <span className="so">So...</span>
        <h2 className="starter">{this.state.selectedStarter}</h2>
        <span className="regen regen--desktop">Click for another starter</span>
        <span className="regen regen--mobile">Tap for another starter</span>
      </div>
    );
  }
}

export default App;

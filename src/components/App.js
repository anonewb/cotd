import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  // created below state here in App compo coz 
  // 1. we want this state to be used in our entire app and
  // 2. data(like addFish property) can be passed to lower compo while lower to upper is not possible.
  state = {
    fishes: {},
    order: {}
  };

  // fn to update state
  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  // loading sample fishes data into state
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        {/* Anything that gets passed onto the compo is available in the props object of that compo */}
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} /> {/* "addFish" is stored in props and passed to further downward compo (like Inventory) where it can be accessed */}
      </div>
    );
  }
}

export default App;
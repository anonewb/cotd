import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  // created below state here in App compo coz 
  // 1. we want this state to be used in our entire app and
  // 2. data(like addFish property) can be passed to lower compo while lower to upper is not possible.
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} /> {/* "addFish" is stored in props and passed to further downward compo (like Inventory) where it can be accessed */}
      </div>
    );
  }
}

export default App;
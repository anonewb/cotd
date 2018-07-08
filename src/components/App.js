import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

/*
App Compo {
  1. state
  2. lifecycle events
  3. custom stuff
  4. render
}
*/

// APP COMPO
class App extends React.Component {
  // STATE
  // created below state here in App compo coz
  // 1. we want this state to be used in our entire app and
  // 2. data(like addFish property) can be passed to lower compo while lower to upper is not possible.
  state = {
    fishes: {},
    order: {}
  };

  // LIFECYCLE EVENTS
  componentDidMount() {
    const { params } = this.props.match;

    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    // syncing our state with firebase
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  // this is req to be done to avoid memory leaks
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  // CUSTOM METHODS
  // fn to update state
  addFish = fish => {
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. set the new fishes object to state
    this.setState({ fishes: fishes });
  };

  // fn to update state
  updateFish = (key, updatedFish) => {
    // 1. take a copy of the current fish state
    const fishes = { ...this.state.fishes };
    // 2. update that state
    fishes[key] = updatedFish;
    // 3. set that to state
    this.setState({ fishes });
  };

  // loading sample fishes data into state
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
  };

  // RENDER
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        {/* Anything that gets passed onto the compo is available in the props object of that compo */}
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />{" "}
        {/* "addFish" is stored in props and passed to further downward compo (like Inventory) where it can be accessed */}
      </div>
    );
  }
}

export default App;

import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        {/* "addFish" is stored in props and passed to further downward compo (like AddFishForm) where it can be accessed */}
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;

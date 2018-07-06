import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!</h2>
        <AddFishForm addFish={this.props.addFish}/> {/* "addFish" is stored in props and passed to further downward compo (like AddFishForm) where it can be accessed */}
      </div>
    );
  }
}

export default Inventory;
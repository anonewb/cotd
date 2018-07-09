import React from "react";

class EditFishForm extends React.Component {
  handleChange = e => {
    console.log(e.currentTarget.value);
    // take a copy of current fish
    const updatedFish = {
      ...this.props.fish,
      // Computed Property Name (ES6 new feature)
      [e.currentTarget.name]: e.currentTarget.value
    };
    // console.log(updatedFish);

    //*** this updateFish() is passed upstream to the App compo via Inventory compo to update the state
    console.log(this.props.updateFish);
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;

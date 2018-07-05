import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();

  // binding in react
  // as we used "this" in pur custom fn below, to bind the method we converted to arrow fn which becomes property to component object thus value of "this" now point to StorePicker obj

  goToStore = event => {
    // 1. stop the form from submitting
    event.preventDefault();
    // 2. get the text from input
    // console.log(this);   <---
    const storeName = this.myInput.value.value;
    // 3. change the pg to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
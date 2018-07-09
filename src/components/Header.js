import React from "react";
import PropTypes from "prop-types";

/*
// regular way of writing component
class Header extends React.Component {
  render() {
    return (
      // html to be rendered
    );
  }
}

// stateless functional component
const Header = props => (
  // html to be rendered
);
*/

// stateless functional compo
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      {/* 'this' refers to Header component instance */}
      {/* use '$r' in console after selecting any component */}
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// since "Header" is a stateless functional compo, we can't use static
// PropTypes used for compo validation
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};

export default Header;

/**
 * Main
 */
import React, { PropTypes } from 'react';

// Styles
import '../styles/main.scss';

const propTypes = {
  children: PropTypes.node,
};

function Main({ children }) {
  return (
    <div className="app">
      {React.cloneElement(children)}
    </div>
	);
}

Main.propTypes = propTypes;

export default Main;

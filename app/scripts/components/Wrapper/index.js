/* eslint max-len: ["error", 200] */

/**
 * Wrapper
 */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Wrapper() {
  return (
    <div className="wrapper">
      <ReactCSSTransitionGroup transitionName="portfolio" transitionAppear transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className="wrapper__holder"></div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default Wrapper;

/**
 * Navigation
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const propTypes = {
  sidebar: PropTypes.bool,
  sidebarToggle: PropTypes.func,
};

function Navigation({ sidebar, sidebarToggle }) {
  return (
    <div className={classNames('navigation', { 'navigation--opened': sidebar })}>
      <div className="navigation__holder">
        <ul>
          <li> <Link onClick={() => sidebarToggle(false)} to="/">Home</Link> </li>
          <li> <Link onClick={() => sidebarToggle(false)} to="/works">Works</Link> </li>
        </ul>
      </div>
    </div>
  );
}

Navigation.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    sidebar: state.sidebar,
  };
}

export default connect(mapStateToProps, actions)(Navigation);

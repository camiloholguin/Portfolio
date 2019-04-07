/* eslint max-len: ["error", 200] */

/**
 * Header
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const propTypes = {
  schema: PropTypes.object,
  sidebar: PropTypes.bool,
  active: PropTypes.number,
  sidebarToggle: PropTypes.func,
  selectWork: PropTypes.func,
};

function Header({ schema, sidebar, active, sidebarToggle, selectWork }) {
  const hamburger = () => {
    if (active !== null) {
      const closeAll = () => {
        selectWork(null);
        if (sidebar) {
          sidebarToggle(false);
        }
      };

      return (
        <div onClick={closeAll} className="hamburger hamburger--elastic is-active">
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
      );
    }

    return (
      <div onClick={() => sidebarToggle(!sidebar)} className={classNames('hamburger hamburger--elastic', { 'is-active': sidebar })}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="masthead">
      <div className="container">
        <div className="masthead__branding">
          <Link to="/"><span className="icon__logo"></span></Link>
          <span className="masthead__branding__logo">{schema.header.branding}</span>
        </div>
        <div className="masthead__navigation">
          {hamburger()}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
    sidebar: state.sidebar,
    active: state.active,
  };
}

export default connect(mapStateToProps, actions)(Header);

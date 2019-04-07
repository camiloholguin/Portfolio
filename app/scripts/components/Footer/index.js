/**
 * Footer
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

const propTypes = {
  schema: PropTypes.object,
  active: PropTypes.number,
};

function Footer({ schema, active }) {
  return (
    <div className={classNames('footer', { 'footer--hide': active !== null })}>
      <div className="container">
        <div className="footer__contact">
          <a href={`mailto:${schema.footer.email}`}>{schema.footer.email}</a>
        </div>
        <div className="footer__social">
          <ul>
            <li>
              <a target="_blank" href={schema.footer.github}>
                <span className="icon__github"></span>
              </a>
            </li>
            <li>
              <a target="_blank" href={schema.footer.linkedin}>
                <span className="icon__linkedin"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
    active: state.active,
  };
}

export default connect(mapStateToProps)(Footer);

/**
 * NotFound
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  schema: PropTypes.object,
};

function NotFound({ schema }) {
  return (
    <div className="content">
      <div className="container">
        <h2>{schema.notfound.heading}</h2>
        <p>{schema.notfound.content}</p>
      </div>
    </div>
  );
}

NotFound.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
  };
}

export default connect(mapStateToProps)(NotFound);

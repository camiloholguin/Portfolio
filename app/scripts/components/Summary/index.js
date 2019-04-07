/**
 * Summary
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  schema: PropTypes.object,
};

function Summary({ schema }) {
  return (
    <div className="content">
      <div className="container">
        <h2>{schema.summary.heading}</h2>
        <p>{schema.summary.content}</p>
        <div className="expertise">
          <hr />
          <p>Expertise</p>
          <ul>
            {schema.summary.expertise.map((elem, key) => (
              <li key={key}><span>{elem.name}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Summary.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
  };
}

export default connect(mapStateToProps)(Summary);

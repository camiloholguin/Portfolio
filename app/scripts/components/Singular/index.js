/* eslint max-len: ["error", 200] */

/**
 * Singular
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Img from 'react-image';
import { ClipLoader } from 'react-spinners';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const propTypes = {
  schema: PropTypes.object,
  active: PropTypes.number,
};

function Singular({ schema, active }) {
  const work = schema.works[active];
  return (
    <div className="container">
      <div className="work">
        <div className="work__holder">
          <ReactCSSTransitionGroup transitionName="portfolio" transitionAppear transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            <div className="work__heading">
              <span>{work.skills}</span>
            </div>
            <div className="work__desciption">
              <p>{work.excerpt}</p>
              <a target="_blank" href={work.link} className="link">Visit site</a>
            </div>
            <div className="work__picture">
              <Img src={work.image.large} loader={<ClipLoader color={'#f1404b'} />} />
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    </div>
  );
}

Singular.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
    active: state.active,
  };
}

export default connect(mapStateToProps)(Singular);

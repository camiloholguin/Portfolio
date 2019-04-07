/**
 * WorksPage
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';

// Actions
import * as actions from '../../actions';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Summary from '../../components/Summary';
import Singular from '../../components/Singular';
import Works from '../../components/Works';
import Navigation from '../../components/Navigation';

const propTypes = {
  schema: PropTypes.object,
  active: PropTypes.number,
  sidebar: PropTypes.bool,
};

function WorksPage({ schema, active, sidebar }) {
  if (active !== null) {
    return (
      <DocumentTitle title={schema.title.home}>
        <section className={classNames('app', { 'app--navigation': sidebar })}>
          <div className="aside aside--whole">
            <Header />
            <Singular />
            <Footer />
          </div>
        </section>
      </DocumentTitle>
    );
  }
  return (
    <DocumentTitle title={schema.title.home}>
      <section className={classNames('app', { 'app--navigation': sidebar })}>
        <div className="aside aside--works">
          <Navigation />
          <Header />
          <Summary />
          <Footer />
        </div>
        <Works />
      </section>
    </DocumentTitle>
  );
}

WorksPage.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
    active: state.active,
    sidebar: state.sidebar,
  };
}

export default connect(mapStateToProps, actions)(WorksPage);

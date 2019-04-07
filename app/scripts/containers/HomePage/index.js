/**
 * HomePage
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
import Wrapper from '../../components/Wrapper';
import Summary from '../../components/Summary';
import Navigation from '../../components/Navigation';

const propTypes = {
  schema: PropTypes.object,
  sidebar: PropTypes.bool,
};

function HomePage({ schema, sidebar }) {
  return (
    <DocumentTitle title={schema.title.home}>
      <section className={classNames('app', { 'app--navigation': sidebar })}>
        <div className="aside">
          <Navigation />
          <Header />
          <Summary />
          <Footer />
        </div>
        <Wrapper />
      </section>
    </DocumentTitle>
  );
}

HomePage.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
    sidebar: state.sidebar,
  };
}

export default connect(mapStateToProps, actions)(HomePage);

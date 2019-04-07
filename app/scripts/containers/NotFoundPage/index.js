/**
 * NotFoundPage
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
import NotFound from '../../components/NotFound';
import Navigation from '../../components/Navigation';

const propTypes = {
  schema: PropTypes.object,
  sidebar: PropTypes.bool,
};

function NotFoundPage({ schema, sidebar }) {
  return (
    <DocumentTitle title={schema.title.error}>
      <section className={classNames('app', { 'app--navigation': sidebar })}>
        <div className="aside">
          <Navigation />
          <Header />
          <NotFound />
          <Footer />
        </div>
        <Wrapper />
      </section>
    </DocumentTitle>
  );
}

NotFoundPage.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    schema: state.schema,
    sidebar: state.sidebar,
  };
}

export default connect(mapStateToProps, actions)(NotFoundPage);

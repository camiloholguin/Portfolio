/**
 * NotFoundPage
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import NotFound from '../../components/NotFound';
import Navigation from '../../components/Navigation';

const propTypes = {
  schema: PropTypes.object,
};

function NotFoundPage({ schema }) {
  return (
    <DocumentTitle title={schema.title.error}>
      <section>
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
  };
}

export default connect(mapStateToProps)(NotFoundPage);

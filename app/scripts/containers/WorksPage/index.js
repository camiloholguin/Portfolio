/**
 * WorksPage
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

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
};

function WorksPage({ schema, active }) {
  if (active !== null) {
    return (
      <DocumentTitle title={schema.title.home}>
        <section>
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
      <section>
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
  };
}

export default connect(mapStateToProps)(WorksPage);

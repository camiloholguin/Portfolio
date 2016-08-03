/**
 * HomePage
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Wrapper from '../../components/Wrapper';
import Summary from '../../components/Summary';
import Navigation from '../../components/Navigation';

const propTypes = {
  schema: PropTypes.object,
};

function HomePage({ schema }) {
  return (
    <DocumentTitle title={schema.title.home}>
      <section>
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
  };
}

export default connect(mapStateToProps)(HomePage);

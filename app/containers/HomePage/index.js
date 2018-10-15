/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import Section from './styledComponents/Section';
import CenteredSection from './styledComponents/CenteredSection';
import RightSection from './styledComponents/RightSection';
import messages from './messages';
import { makeSelectCurrentUserName } from '../App/selectors';
import { makeSelectChartData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Chart } from 'primereact/chart';
import { loadUserData } from "./actions";
import chartOptions from "./chartOptions";

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentWillMount() {
    this.props.onPageLoad();
  }

  render() {
    const chartData = this.props.chartData;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Homepage for bitcoin management platform"
          />
        </Helmet>
        <div>
          <RightSection>Welcome, {this.props.currentUserName} </RightSection>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <Chart type="pie" data={chartData} options={chartOptions} />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  currentUserName: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(loadUserData()),
  };
}

const mapStateToProps = createStructuredSelector({
  currentUserName: makeSelectCurrentUserName(),
  chartData: makeSelectChartData()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga
)(HomePage);

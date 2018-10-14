import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logout } from '../App/actions';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import saga from "./saga";
import injectSaga from 'utils/injectSaga';

/* eslint-disable react/prefer-stateless-function */
class LogoutPage extends React.Component {

  componentWillMount(){
    this.props.dispatchLogoutAction();
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatchLogoutAction: () => dispatch(logout()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'logout', saga });

export default compose(
  withConnect,
  withSaga
)(LogoutPage);

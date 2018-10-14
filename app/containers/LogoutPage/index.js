import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../App/actions';
import { createStructuredSelector } from "reselect";
import {compose} from "redux";
import saga from "./saga";
import injectSaga from 'utils/injectSaga';

class LogoutPage extends React.PureComponent {
  componentWillMount(){
    this.props.dispatchLogoutAction();
  }

  render() {
    return (null);
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

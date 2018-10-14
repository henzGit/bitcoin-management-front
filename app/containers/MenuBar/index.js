import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logout } from '../App/actions';
import { createStructuredSelector } from "reselect";
import { push } from 'react-router-redux';
import { makeSelectItems } from "./selectors";
import {compose} from "redux";
import reducer from "./reducer";
import saga from "./saga";
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

/* eslint-disable react/prefer-stateless-function */
class MenuBar extends React.Component {
  render() {
    const stateItems = this.props.items.toJS() ;
    return (
      <div>
        <div className="content-section implementation">
          <Menubar model={stateItems}>
            <Button
              label="Logout"
              icon="pi pi-power-off"
              style={{ marginRight: 5 }}
              onClick={this.props.onLogoutButtonClick}
          />
          </Menubar>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  onLogoutButtonClick: PropTypes.func,
  items: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  items: makeSelectItems()
});

export function mapDispatchToProps(dispatch) {
  return {
    onLogoutButtonClick: () => {
      dispatch(logout());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'menu', reducer });
const withSaga = injectSaga({ key: 'menu', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga
)(MenuBar);
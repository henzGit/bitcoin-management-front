import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { logout } from '../App/actions';
import { createStructuredSelector } from "reselect";
import { makeSelectUsername } from "../HomePage/selectors";

/* eslint-disable react/prefer-stateless-function */
class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          url: '/app/',
        },
        {
          label: 'Coin',
          icon: 'pi pi-fw pi-star',
          url: '/app/coin/',
        },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          url: '/app/profile/',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="content-section implementation">
          <Menubar model={this.state.items}>
            <Button
              label="Logout"
              icon="pi pi-power-off"
              style={{ marginLeft: 4 }}
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
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLogoutButtonClick: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);



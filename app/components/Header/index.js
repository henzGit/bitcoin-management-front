import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          url: '/',
        },
        {
          label: 'Coin',
          icon: 'pi pi-fw pi-star',
        },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
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
            />
          </Menubar>
        </div>
      </div>
    );
  }
}

export default Header;

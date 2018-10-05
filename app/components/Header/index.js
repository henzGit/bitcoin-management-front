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
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                {
                  label: 'Bookmark',
                  icon: 'pi pi-fw pi-bookmark',
                },
                {
                  label: 'Video',
                  icon: 'pi pi-fw pi-video',
                },
              ],
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash',
            },
            {
              separator: true,
            },
            {
              label: 'Export',
              icon: 'pi pi-fw pi-external-link',
            },
          ],
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

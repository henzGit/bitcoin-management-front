/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import {Button} from 'primereact/button';

export default class AuthPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  constructor() {
    super();
    this.state = {
      userName: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Authentication</h1>
          </div>
        </div>

        <div className="content-section implementation">
          <div
            className="p-grid"
            style={{ width: '250px', marginBottom: '10px' }}
          >
            <h3 className="first">Username</h3>
            <InputText value={this.state.userName}
                       onChange={(e) => this.setState({userName: e.target.value})} />
            <h3 className="first">Password</h3>
            <Password onChange={(e) => this.setState({password: e.target.value})}/>
            <h3></h3>
            <Button label="Login" />

          </div>
        </div>
      </div>
    );
  }
}

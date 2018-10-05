/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';

export default class TestPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  constructor() {
    super();
    this.state = {
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
            <h3>Username</h3>
            <span className="p-float-label">
              <InputText id="float-input" type="text" size="30" value={this.state.value2} />
              <label htmlFor="float-input">Username</label>
            </span>
            <div className="content-section implementation">
              <h3 className="first">Password</h3>
              <Password/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

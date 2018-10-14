/*
 * TestPage
 *
 * Testing purpose only
 */
import React from 'react';
import { RadioButton } from 'primereact/radiobutton';

export default class TestPage extends React.Component {
  constructor() {
    super();
    this.state = {
      city: null,
    };
  }

  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>RadioButton</h1>
            <p>
              RadioButton is an extension to standard radio button element with
              skinning capabilities.
            </p>
          </div>
        </div>

        <div className="content-section implementation">
          <div
            className="p-grid"
            style={{ width: '250px', marginBottom: '10px' }}
          >
            <div className="p-col-12">
              <RadioButton
                inputId="rb1"
                name="city"
                value="New York"
                onChange={e => this.setState({ city: e.value })}
                checked={this.state.city === 'New York'}
              />
              <label htmlFor="rb1" className="p-radiobutton-label">
                New York
              </label>
            </div>
            <div className="p-col-12">
              <RadioButton
                inputId="rb2"
                name="city"
                value="San Francisco"
                onChange={e => this.setState({ city: e.value })}
                checked={this.state.city === 'San Francisco'}
              />
              <label htmlFor="rb2" className="p-radiobutton-label">
                San Francisco
              </label>
            </div>
            <div className="p-col-12">
              <RadioButton
                inputId="rb3"
                name="city"
                value="Los Angeles"
                onChange={e => this.setState({ city: e.value })}
                checked={this.state.city === 'Los Angeles'}
              />
              <label htmlFor="rb3" className="p-radiobutton-label">
                Los Angeles
              </label>
            </div>
          </div>
          Selected City : {this.state.city}
        </div>
      </div>
    );
  }
}

/*
 * AuthPage
 *
 * Used for user authentication
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { changeUsername, changePassword, authenticate } from './actions';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUsername,
  makeSelectPassword,
  makeSelectAuthenticating,
  makeSelectError
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

export class AuthPage extends React.PureComponent {
  render() {
    const { authenticating, error, username } = this.props;

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
            <form >
              <h3 className="first">Username</h3>
              <InputText
                value={username}
                onChange={this.props.onChangeUsername}
              />
              <h3 className="first">Password</h3>
              <Password
                feedback={false}
                onChange={this.props.onChangePassword}
              />
              <h3></h3>
              <Button label="Login"
                      onClick={this.props.onSubmitForm}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(authenticate());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  authenticating: makeSelectAuthenticating(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthPage);

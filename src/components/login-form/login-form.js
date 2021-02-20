import React from 'react';
import TextBox from 'devextreme-react/text-box';
import ValidationGroup from 'devextreme-react/validation-group';
import Validator, { RequiredRule } from 'devextreme-react/validator';
import Button from 'devextreme-react/button';
import CheckBox from 'devextreme-react/check-box';
import './login-form.scss';
import appInfo from '../../app-info';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  render() {
    const { login, password } = this.state;

    return (
      <ValidationGroup>
        <div className={'login-header'}>
          <div className={'title'}>{appInfo.title}</div>
          <div>Sign In to</div>
        </div>
        <div className={'dx-field'}>
          <TextBox
            onKeyDown={this.keyPress}
            value={login}
            onValueChanged={this.loginChanged}
            placeholder={'Login'}
            width={'100%'}
          >
            <Validator>
              <RequiredRule message={'Login is required'} />
            </Validator>
          </TextBox>
        </div>
        <div className={'dx-field'}>
          <TextBox
            onKeyDown={this.keyPress}
            mode={'password'}
            value={password}
            onValueChanged={this.passwordChanged}
            placeholder={'Password'}
            width={'100%'}
          >
            <Validator>
              <RequiredRule message={'Password is required'} />
            </Validator>
          </TextBox>
        </div>
        <div className={'dx-field'}>
          <CheckBox defaultValue={false} text={'Remember me'} />
        </div>
        <div className={'dx-field'}>
          <Button
            type={'default'}
            text={'Login'}
            onClick={this.onLoginClick}
            width={'100%'}
          />
        </div>
      </ValidationGroup>
    );
  }
  keyPress = e => {
    if (e.event.key === 'Enter') {
      debugger
      const { login, password } = this.state;
      if (login == 'admin' && password == 'admin') {
        this.props.onLoginClick(login, password);
        // e.validationGroup.reset();
      } else {
        alert('กรุณาตรวจสอบ username or password')
      }
    }
  }

  loginChanged = e => {
    this.setState({ login: e.value });
  };

  passwordChanged = e => {
    this.setState({ password: e.value });
  };

  onLoginClick = args => {
    if (!args.validationGroup.validate().isValid) {
      return;
    }
    const { login, password } = this.state;
    if (login == 'admin' && password == 'admin') {
      this.props.onLoginClick(login, password);
      args.validationGroup.reset();
    } else {
      alert('กรุณาตรวจสอบ username or password')
    }
  }
}
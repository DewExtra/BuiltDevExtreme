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
    const axios = require('axios');

    return (
      <ValidationGroup>
        <div className={'login-header'}>
          <div className={'title'}>{appInfo.title}</div>
          <div>Sign In to</div>
        </div>
        <div className={'dx-field'}>
          <TextBox
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
        {/* <div className={'dx-field'}>
          <Link to={'/recovery'} onClick={e => e.preventDefault()}>Forgot password ?</Link>
        </div>
        <div className={'dx-field'}>
          <Button type={'normal'} text={'Create an account'} width={'100%'} />
        </div> */}
      </ValidationGroup>
    );
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

  //   let param =
  //   {
  //     "username": "admin",
  //     "password": "BR5gxjEIQH+ztmArmZ/EPw==",
  //   }

  //   fetch('http://www.truckq_api.laemchabangport.com:8043/TruckQ/Backend/DEV/truckq.master_user.api/api/v1/masteruser/filter', {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //       "Access-Control-Allow-Origin": "*",
  //       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxjYmEwYWRtIiwiZ3JvdXAiOiIxIiwidHlwZSI6InAiLCJwb3J0IjoiTENCQTAiLCJuYmYiOjE2MDAyNTM5MzUsImV4cCI6MTkxNTYxMzkzNSwiaWF0IjoxNjAwMjUzOTM1fQ.SioBLRhW6nPS9r07r47Y1jJGysi2z_2NTdbQk2A6_08" //`Bearer ${storage.tk}`
  //     },
  //     body: JSON.stringify(param),
  //   }).then(response => response.json())
  //     .then(result => {
  //       if (result.response == null ) {
  //         this.props.onLoginClick(login, password);
  //         args.validationGroup.reset();
  //       } else {
  //         alert('กรุณาตรวจสอบ username or password')
  //       }

  //     });
  // }
  // let getparams = { login, password };
  // let getMethod = "POST";
  // //return axios.get(`${api}`, {
  // fetch('http://kascoit.ddns.me:99/Amazon_MasterAPI/api/User/addUser', {
  //   method: getMethod,
  //   body: JSON.stringify(getparams),
  //   mode: 'no-cors',
  //   headers: {
  //     "Content-Type": "application/json; charset=utf-8",
  //     "Access-Control-Allow-Origin": "*"
  //   }
  // })
  //   .then(response => response.json())
  //   .catch(err => {
  //     console.log(err);
  //   });



  // this.setState({ login: response.data[0].tagOutPick_No });
  // this.setState({ password: response.data[1].tagOutPick_No });
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // };

  //  componentDidMount() {
  //     axios.post('http://kascoit.ddns.me:99/Amazon_MasterAPI/api/User/addUser', {
  //       UserName: 'adminBank',
  //       UserPassword: 'adminBank'
  //   })
  //   .then(response => {
  //       // this.setState({ login: response.data[0].tagOutPick_No });
  //       // this.setState({ password: response.data[1].tagOutPick_No });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // axios.get('https://dog.ceo/api/breeds/image/random') 
  // .then(response => {
  //   this.setState({ login: response.data.message });
  //   this.setState({ password: response.data.message });
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  }
}
import React from 'react';

class Register extends React.Component {

  fetchUserInfo() {
    this.props.fetchRegisterToken();
    // console.log(fetchSigninToken);
  }

  render() {
    const {token} = this.props;
    return (
        <div>
          <h1>Welcome to Register</h1>
          <form>
              <label>EMAIL ADDRESS </label>
              <input type="email" id="user-email" />
              <label>PASSWORD </label>
              <input type= "password" id="user-pass" />
              <label>CONFIRM PASSWORD </label>
              <input type= "password" id="user-pass" />
          </form>
          <button type="submit" onClick={this.fetchUserInfo.bind(this)}>Register </button>
        </div>
     
    );
  }
}


export default Register;
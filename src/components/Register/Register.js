import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', 
      confirm_password: ''
    };
    this.handleEmailChange= this.handleEmailChange.bind(this)
    this.handlePasswordChange= this.handlePasswordChange.bind(this)
    this.handleConfirmPasswordChange= this.handleConfirmPasswordChange.bind(this)
    this.fetchUserInfo = this.fetchUserInfo.bind(this)
  }

  handleEmailChange(e) {
     this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
     this.setState({password: e.target.value});
  }

  handleConfirmPasswordChange(e) {
     this.setState({confirm_password: e.target.value});
  }

  fetchUserInfo() {
    this.props.fetchRegisterToken(this.state.email,this.state.password,this.state.confirm_password);
  }
  
  validatePassword(){
    this.props.validatePassword(this.state.password, this.state.confirm_password);
  }
  render() {
    return (
        <div>
          <h1>Welcome to Register</h1>
          <form>
              <label>EMAIL ADDRESS </label>
              <input type="email" id="user-email" required ="required" value={this.state.email} onChange={this.handleEmailChange}/>
              <label>PASSWORD </label>
              <input type= "password" id="user-pass" required ="required" value={this.state.password} onChange={this.handlePasswordChange}/>
              <label>CONFIRM PASSWORD </label>
              <input type= "password" id="user-pass" required ="required" value={this.state.confirm_password} onChange={this.handleConfirmPasswordChange}/>
             
          </form>
          <button type="submit" onClick={this.fetchUserInfo}>Register </button>
        </div>
     
    );
  }
}


export default Register;
import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '', 
      confirm_password: ''
    };
  }

  handleEmailChange = (e) => {
     this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
     this.setState({password: e.target.value});
  }

  handleConfirmPasswordChange = (e) => {
     this.setState({confirm_password: e.target.value});
  }

  fetchUserInfo = () => {
    this.props.fetchRegisterToken(this.state.email,this.state.password,this.state.confirm_password);
  }

  validateRegister = () =>{
    const email = this.state.email;
    localStorage.setItem('Email',email);
    var userEmail = localStorage.getItem('Email');
    const password = this.state.password;
    const confirmPassword = this.state.confirm_password;

    if(email.length ===0) {
      alert('please add valid email');
    }
    if(password.length === 0 && confirmPassword.length ===0){
      alert('please fill the password and it should have 8 letters');
    }
    if(password !== confirmPassword){
      alert('Password and confirmPassword do not match');
    }
    if(email.length > 0 && password.length > 0 && confirmPassword.length > 0){
      this.fetchUserInfo();
    }
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
          <button type="submit" onClick={this.validateRegister}>Register </button>
          
        </div>
     
    );
  }
}


export default Register;
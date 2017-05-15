import React from 'react';

class Signin extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: ''
  };
}

handleUserNameChange = (e) => {
   var username = e.target.value
   this.setState({username: username});
}

handlePasswordChange = (e) => {
  var password = e.target.value
   this.setState({password: password});
}

fetchUserInfo = () => {
  this.props.fetchSigninToken(this.state.username,this.state.password);
}

validateRegister = () =>{
  const username = this.state.username;
  localStorage.setItem('Email',username);
  var userEmail = localStorage.getItem('Email');
  const password = this.state.password;

  if(username.length ===0) {
    alert('please add valid email');
  }
  if(password.length === 0){
    alert('please fill the password');
  }

  if(username.length > 0 && password.length > 0){
    this.fetchUserInfo();
  }
}

render() {
  return ( 
      <div>
        <h1>Welcome to Signin</h1>
        <form onSubmit={this.handleSubmit}>
            <label>EMAIL ADDRESS </label>
            <input type="email" id="user-email" value={this.state.username} onChange={this.handleUserNameChange} required="required" />
            <label>PASSWORD </label>
            <input type="password" id="user-pass" required="required" value={this.state.password} onChange={this.handlePasswordChange} /> 
        </form>
         <button type="button" onClick={this.validateRegister}>Signin </button>
      </div>
    );
  }
}


export default Signin;
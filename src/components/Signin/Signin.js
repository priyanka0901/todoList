import React from 'react';

class Signin extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    username: '',
    password: ''
  };
  this.handleUserNameChange= this.handleUserNameChange.bind(this)
  this.handlePasswordChange= this.handlePasswordChange.bind(this)
  this.fetchUserInfo = this.fetchUserInfo.bind(this)
}

handleUserNameChange(e) {
   this.setState({username: e.target.value});
}

handlePasswordChange(e) {
   this.setState({password: e.target.value});
}

fetchUserInfo() {
  this.props.fetchSigninToken(this.state.username,this.state.password);
}

render() {
  return ( 
      <div>
        <h1>Welcome to Signin</h1>
        <form>
            <label>EMAIL ADDRESS </label>
            <input type="email" id="user-email" required ="required" value={this.state.username} onChange={this.handleUserNameChange}/>
            <label>PASSWORD </label>
            <input type="password" id="user-pass" required ="required" value={this.state.password} onChange={this.handlePasswordChange} />
        </form>
         <button type="button" onClick={this.fetchUserInfo}>Signin </button>
      </div>
    );
  }
}


export default Signin;
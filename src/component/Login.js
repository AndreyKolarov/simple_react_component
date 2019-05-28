import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      isOK: false,
      isError: ""
    }
  }
  onValidate = () => {
    let user = this.state.username;
    let pwd = this.state.password;
    if(user === "" || pwd === ""){
      this.setState({isOK: false});
      this.setState({isError: "Fill all gaps."});
    }else if(pwd.length<6){
      this.setState({isOK: false});
      this.setState({isError: "Password should be over 6 characters."});
    }
  }
  nameChanged = e => {
    this.setState({username: e.target.value});
  }
  pwdChanged = e =>{
    this.setState({password:e.target.value});
  }
  render(){
    return (
      <div className="LoginFormApp">
        <div className="LoginForm">
          <h1>L O G I N</h1>
          <table class="loginTable">
            <tr>
              <td>Username:</td>
              <td><input type="text" placeholder="Username" onChange={this.nameChanged}/></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type="password" placeholder="Password" onChange={this.pwdChanged}/></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button onClick={this.onValidate}>Login</button>
                <button onClick={this.props.onRegister}>Signup</button>
              </td>
            </tr>
            <tr>
              <td colspan="2"> 
                {this.state.isOK === false ? <p>{this.state.isError}</p> : <p>Please wait...</p>}
              </td>
              
            </tr>
          </table>
          
          
        </div>      

      </div>
    );
  }
  
}

export default Login;

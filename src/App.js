import React, {Component} from 'react';
import logo from './logo.svg';
//import Comtest from './Comtest';
//import Todos from './Todos';
import Login from './component/Login';
import Signup from './component/Signup';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      isNew:false
    }
  }
  onRegister = () =>{
    this.setState({isNew: true});
  }
  onBack = () => {
    this.setState({isNew: false});
  }
  render(){
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Comtest />
        <Todos /> */}
        {this.state.isNew === true ? <Signup /> : <Login />}
      </div>
    );
  }
  
}

export default App;

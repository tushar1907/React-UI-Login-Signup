import React, { Component } from 'react';
import { PostData } from '../../services/PostData';



class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      username:'',
      password:''
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(){
    PostData('login', this.state).then ((result)=>{
      let responseJSON = result; 
      console.log(responseJSON);
    })
    console.log("this is login button")
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
        <div className="cell bodyPart">
          <h3>Login Page</h3>
          <label>Username:</label>
          <input type='text' name='username' placeholder='Username' onChange={this.onChange}></input>
          <label>Password:</label>
          <input type='text' name='password' placeholder='Password' onChange={this.onChange}></input>
          <input type='button' value='Login' className='button' onClick={this.login}/>

        </div>

      </div>
    );
  }
}

export default Login;

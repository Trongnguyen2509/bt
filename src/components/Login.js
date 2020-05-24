import React from 'react';

export default class Login extends React.Component {
  render(){
    return (
            <>
             <div class="loginbox">
                <h1>Login Here</h1>
                <form>
                    <p>Username</p>
                    <input type="text" name="" placeholder="Enter Username"></input>
                    <p>Password</p>
                    <input type="password" name="" placeholder="Enter Password"></input>
                    <input type="submit" name="" value="Login"></input>
                </form>
            
            </div>
        </>
    )
  }
}
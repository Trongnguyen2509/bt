import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Daxoa from './Daxoa';

class Button extends React.Component{
    render(){
        return (
            <Router>
              <div className="home">
                <ul>
                <button>
                  <li>
                    <Link to="/Home">Home</Link>
                  </li>

                  <li>
                    <Link to="/Login">Login</Link>
                  </li>

                  <li>
                    <Link to="/Logout">Logout</Link>
                  </li>

                  <li>
                    <button><Link to="/Daxoa"><h5>Đơn đã xóa</h5></Link></button>
                  </li>

                </button>
                </ul>
        
                <hr />
                <Switch>
                  <Route exact path="/Home">
                    <Home />
                  </Route>
                  
                  <Route exact path="/Login">
                      <Login />
                  </Route>

                  <Route exact path="/Logout">
                    <Logout />
                  </Route>

                  <Route exact path="/Daxoa">
                    <Daxoa />
                  </Route>

                </Switch>
              </div>
            </Router>
          );
        }    
    }
   export default Button; 
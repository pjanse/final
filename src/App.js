import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Message from './Components/Message';
import './App.css';

class App extends React.Component{
    render(){
      return (
        <div className="App">
          <div>
            <Router>
              <nav>
                <ul className = "navbar">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">Create page</Link>
                  </li>
                  <li id='messageLink'>
                    <Link to="/message">Message Board</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/message" component={Message}/>
              </Switch>
            </Router>
          </div>
          <div>
            
          </div>
        </div>
      )}
}

export default App;

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
                    <Link to="/"><button>Home</button></Link>
                  </li>
                  <li>
                    <Link to="/about"><button>About page</button></Link>
                  </li>
                  <li id='messageLink'>
                    <Link to="/message"><button>Message Board</button></Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/message" component={Message}/>
              </Switch>
            </Router>
          </div>
          <div>
            
          </div>
        </div>
      )}
}

export default App;

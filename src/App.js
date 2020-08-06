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
                    <Link to="/final/"><button>Home</button></Link>
                  </li>
                  <li>
                    <Link to="/final/about"><button>About page</button></Link>
                  </li>
                  <li id='messageLink'>
                    <Link to="/final/message"><button>Message Board</button></Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/final/" component={Home}/>
                <Route  path="/final/about" component={About}/>
                <Route  path="/final/message" component={Message}/>
              </Switch>
            </Router>
          </div>
          <div>
            
          </div>
        </div>
      )}
}

export default App;

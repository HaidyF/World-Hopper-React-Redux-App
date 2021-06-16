import React from 'react';
import './App.css';
import CountriesContainer from './Components/CountriesContainer'
import Country from './Components/Country'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header'

function App() {

  return (
    <div className="App">
      
          <Router>
                <header className="App-header">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/countries" component={CountriesContainer} />
                      <Route exact path="/country/:name" component={Country} />
                    </Switch>
                </header>
          </Router>
    </div>
  );
}

export default App;

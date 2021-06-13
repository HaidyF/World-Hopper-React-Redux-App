import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesContainer from './Components/CountriesContainer'
import Country from './Components/Country'
import { BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
      <Switch>
      <Route path="/countries">
        <CountriesContainer></CountriesContainer>
      </Route>
      <Route path="/country/:name">
        <Country></Country>
      </Route>
      <Route path="">
        Home
      </Route>
        </Switch>
      </header>
      </Router>
    </div>
  );
}

export default App;

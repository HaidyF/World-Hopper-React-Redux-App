import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesContainer from './Components/CountriesContainer'
import Country from './Components/Country'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
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
        <Home></Home>
      </Route>
        </Switch>
      </header>
      </Router>
    </div>
  );
}

export default App;

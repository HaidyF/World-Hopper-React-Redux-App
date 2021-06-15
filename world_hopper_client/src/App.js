import React from 'react';
import './App.css';
import CountriesContainer from './Components/CountriesContainer'
import Country from './Components/Country'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header'
import CountryDetail from './Components/CountryDetail'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
          <Router>
                <header className="App-header">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/countries" component={CountriesContainer} />
                      <Route exact path="/country/:name" component={Country} />
                      <Route exact path="/countrydetail/:name" component={CountryDetail} />
                    </Switch>
                </header>
          </Router>
    </div>
  );
}

export default App;

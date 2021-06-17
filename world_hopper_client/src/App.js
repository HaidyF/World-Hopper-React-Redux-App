import React from 'react';
import './App.css';
import CountriesContainer from './Components/CountriesContainer'
import Country from './Components/Country'
import FlashCard from './Components/FlashCard'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TravelForm from './Components/TravelForm'
// import { addInput } from './Actions/CountriesActions'

function App() {

  return (
    <div className="App">
  
          <Router>
                <header className="App-header">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/countries" component={CountriesContainer} />
                      <Route exact path="/country/:name" component={Country} />
                      <Route exact path="/flashCards" component={FlashCard} />
                      <Route exact path="/travel" component={TravelForm} />
                    </Switch>
                </header>
          </Router>
    </div>
  );
}

export default App;

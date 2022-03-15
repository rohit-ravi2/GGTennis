import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Programs from './components/pages/Programs';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact-Us'
import Mission from './components/pages/Mission'
import Facilities from './components/pages/Facilities'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/GGTennis/' exact component={Home} />
          <Route path='/GGTennis/programs' component={Programs} />
          <Route path='/GGTennis/team' component={Team} />
          <Route path='/GGTennis/contact-us' component={Contact} />
          <Route path='/GGTennis/our-mission' component={Mission} />
          <Route path='/GGTennis/facilities' component={Facilities} />

        </Switch> 
        <Footer/>
        
      </Router>
    </>
  );
}

export default App;

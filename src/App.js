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
          <Route path='/' exact component={Home} />
          <Route path='/programs' component={Programs} />
          <Route path='/team' component={Team} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/our-mission' component={Mission} />
          <Route path='/facilities' component={Facilities} />

        </Switch> 
        <Footer/>
        
      </Router>
    </>
  );
}

export default App;

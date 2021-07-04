import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import apia from './components/pages/apia';
import apib from './components/pages/apib';
import apic from './components/pages/apic';
import Under from './components/pages/under';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path={process.env.PUBLIC_URL +'/api-projects'} exact component={Home} />
          <Route path={process.env.PUBLIC_URL +'/apia'} component={apia} />
          <Route path={process.env.PUBLIC_URL +'/apib'} component={apib} />
          <Route path={process.env.PUBLIC_URL +'/apic'} component={apic} /> 
          <Route path={process.env.PUBLIC_URL +'/under}' component={Under} />    
   
        </Switch>
      </Router>
    </>
  );
}

export default App;

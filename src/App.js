import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Footer } from 'react-reused-components';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Alerts from './components/Alerts';
import Headerdata from './components/Headerdata';
import Bar from './components/Bar';
import Popup from './components/Popup';

function App() {
  return (
    <div>
          <Router>
         <Navbar
      navbarStyle='navbar--dark'
      header='My App'
      Tab1='Buttons'
      Tab2='Inputs'
      Tab3='Alerts'
      Tab4='Headerdata'
      Tab5='Bar'
      Tab6='Popup'
    />
        <Route path="/Buttons" component={Buttons} />
        <Route path="/Inputs" component={Inputs} />
        <Route path="/Alerts" component={Alerts} />
        <Route path="/Headerdata" component={Headerdata} />
        <Route path="/Bar" component={Bar} />
        <Route path="/Popup" component={Popup} />
    </Router>
     <Footer footerStyle='footer--secondary' footerFixed='footer--fixed'>
      © Copyright 2020 adfd
    </Footer>
    
    </div>
  );
}

export default App;

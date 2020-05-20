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
import Shoppingcard from './components/Shoppingcard';
import Carddetails from './components/Carddetails';
import Shoppingcart from './components/Shoppingcart';

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
      Tab7='Shoppingcard'
      Tab8='Carddetails'
      Tab9='Shoppingcart'
    />
        <Route path="/Buttons" component={Buttons} />
        <Route path="/Inputs" component={Inputs} />
        <Route path="/Alerts" component={Alerts} />
        <Route path="/Headerdata" component={Headerdata} />
        <Route path="/Bar" component={Bar} />
        <Route path="/Popup" component={Popup} />
        <Route path="/Shoppingcard" component={Shoppingcard} />
        <Route path="/Carddetails" component={Carddetails} />
        <Route path="/Shoppingcart" component={Shoppingcart} />
    </Router>
     <Footer footerStyle='footer--secondary' footerFixed='footer--fixed'>
      © Copyright 2020 adfd
    </Footer>
    
    </div>
  );
}

export default App;

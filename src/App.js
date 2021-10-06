import React, { useEffect } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
// ==========================================================================================
import Login from './components/pages/authPages/LoginPage';
import Signup from './components/pages/authPages/SignupPage';
import Info from './components/pages/onboarding/Info';
import Medical from './components/pages/onboarding/Medical';
import Profile from './components/pages/profile/Profile';

function App() {
  const fetchApi = async () => {
    try {
      const res = await axios.get('http://localhost:8000/');
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <div className="App">
      <Router basename="/micardgo-web">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/info" exact component={Info} />
          <Route path="/medical" exact component={Medical} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// TODO: Protect routes
// TODO: Redirect once a token is received
// TODO: Logout functionality
// TODO: Create DB Schema for info and medical data (models are done and fix info)
// TODO: Add user data to QR-Code
// TODO: Passkits for Apple Wallet and Google Pay
// TODO: Add gender icons on info page

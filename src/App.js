// import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
// ==========================================================================================
import Login from './components/pages/authPages/LoginPage';
import Signup from './components/pages/authPages/SignupPage';
import Info from './components/pages/onboarding/Info';
import Profile from './components/pages/profile/Profile'
 
function App() {
  return (
    <div className="App">
      <Router basename="/micardgo-web">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/info" exact component={Info} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

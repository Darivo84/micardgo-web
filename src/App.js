import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Login from './components/pages/authPages/Login';
import Register from './components/pages/authPages/Register';
// import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="App">
      <Router basename="/micardgo-web">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="/profile" component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

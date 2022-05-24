import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
/* import ReactDOM from 'react-dom/client'; */
import './index.css';
import App from './components/App';
import Projects from './components/Projects';
import Jokes from './components/Jokes';
import SocialProfiles from './components/SocialProfiles';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    {/* <Switch> */}
      <Route exact path='/' component={App} />
      <Route path='/Projects' component={Projects} />
    {/* </Switch> */}
  </Router>,
  document.getElementById('root')
);

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); */

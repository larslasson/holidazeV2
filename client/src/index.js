import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import './index.css';
import App from './App';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Establishments from './pages/Establishments';
import HotelSpecific from './pages/Specific';
import Admin from './pages/Admin';

import Footer from './components/footer';
import Navigation from './components/navbar';

import * as serviceWorker from './serviceWorker';

const PublicRoute = ({ component: Component, ...rest }) => {
  const component = props => (
    <div>
      <Navigation />
      <Component {...props} />
      <Footer />
    </div>
  )
  return <Route {...rest} component={component} />
}
const AdminRoute = ({ component: Component, ...rest }) => {
  const component = props => <Component {...props} />
  return <Route {...rest} component={component} />
}

ReactDOM.render(

  <Router>
    <App>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/contact" component={Contact} />
        <PublicRoute path="/establishments" component={Establishments} />
        <AdminRoute path="/admin" component={Admin} />
        <PublicRoute path="/hotel-specific/:id" component={HotelSpecific} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

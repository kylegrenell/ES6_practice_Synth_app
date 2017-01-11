import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Korg from './components/Korg.jsx';
import Home from './components/Home';
import Moog from './components/Moog';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
    <Route path='/' component={Main}>
    <IndexRoute component={Home}/>
    <Route path='home' component={Home}/>
    <Route path='korg' component={Korg}/>
    <Route path='moog' component={Moog}/>
    </Route>
    </Router>,
    document.getElementById('app')
  );
}

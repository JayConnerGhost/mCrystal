import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter } from 'react-router-dom';

import { Link, Route, Switch } from 'react-router-dom';

import App from './App.js';
import '../api/Buildings.js';
 

Meteor.startup(() => {
 
   render(
<BrowserRouter>
  <App />
  </BrowserRouter>
  , document.getElementById('render-target'));

});

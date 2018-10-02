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

<<<<<<< HEAD

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  ...modalStyle,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 50 + rand();
  let left = 50 + rand();

  return {
    position: 'absolute',
    width: 400,
    top: top + '%', left: left + '%',
    transform: `translate(-${top}%, -${left}%)`,
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};

=======
>>>>>>> 038973bc4473f788706661c0228322d673cb1308

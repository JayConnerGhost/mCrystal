import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home';

class MenuItem extends Component{
    render(){
        return (
            <li id={this.props.id} key={this.props.id} className="nav-item">
                <Link className="nav-link" to={this.props.url}>{this.props.name}</Link>
             </li>
          
        )
          
    }
}

export default MenuItem;
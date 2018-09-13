import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { BrowserRouter } from 'react-router-dom';

import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
class frame extends Component{
        
    buildNavItems(){
        return (
            [
                {_id:1, name:'Home',urlPart:'/'},
                {_id:2, name:'Contact',urlPart:'/contact'},
                {_id:3, name:'About',urlPart:'/about'}
               
            ]
        );
    }

    renderNavItems()
    {
       

        return (            
                this.buildNavItems().map((navItem)=>(
                  <MenuItem key={navItem._id} id={navItem._id} url={navItem.urlPart} name={navItem.name}/>
                )));
        
    }

    render(){
        return(
<div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
             <a className="navbar-brand" href="#">Crystal</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
             </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {this.renderNavItems()}
                    </ul>
                </div>
            </nav>
            <div>
                   <Route exact={true} path="/" component={Home}/>
                   <Route exact={true} path="/about" component={About}/>
            </div>
</div>
        );
    }
}

export default frame;
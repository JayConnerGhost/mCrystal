import React, { Component } from 'react';
import MenuItem from './MenuItem';
import { BrowserRouter } from 'react-router-dom';

import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Accounts from './accounts';
import NewBuildings from './NewBuildings';
import ShowBuildings from './ShowBuildings';
import NotFound from './NotFound';
import Auth from '../imports/hoc/auth'

class frame extends Component{
     

  
    buildNavItems(){
        return (
            [
                {_id:1, name:'Home',urlPart:'/',parent:0, children:[]},
                {_id:2, name:'Buildings',urlPart:'/buildings',parent:0,
                    children:[
                        {_id:3, name:'New Building',urlPart:'/buildings/new',parent:2},
                        {_id:4, name:'Show Building',urlPart:'/buildings/show',parent:2}
                        ]

                },
                {_id:5, name:'Contact',urlPart:'/contact', parent:0, children:[]},
                {_id:6, name:'About',urlPart:'/about', parent:0, children:[]}
               
            ]
        );
    }

    renderNavItems()
    {
       

        return (            
                this.buildNavItems().map((navItem)=>(
                  <MenuItem 
                  key={navItem._id} 
                  id={navItem._id} 
                  url={navItem.urlPart}
                  name={navItem.name} parent={navItem.parent}
                  children={navItem.children}
                   />
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
                   
                        <li ><Accounts /></li>  
                    </ul>
                </div>
            </nav>
            <div>
            <Switch>
                   <Route exact={true} path="/" component={Home}/>
                   <Route exact={true} path="/about" component={About}/>
                   <Route exact={true} path="/contact" component={Contact}/>
                   <Route exect={true} path="/buildings/new" component={Auth(NewBuildings)}/>
                   <Route exect={true} path="/buildings/show" component={Auth(ShowBuildings)}/>
                   <Route component={NotFound}/>
                 
            </Switch>
            </div>
</div>
        );
    }
}

export default frame;
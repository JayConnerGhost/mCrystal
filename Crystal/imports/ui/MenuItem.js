import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Link, Route, Switch } from 'react-router-dom';

import Home from './Home';

class MenuItem extends Component{
    writeOutChild(child)
    {
      return  <a className="dropdown-item" href={child.urlPart}>{child.name}</a>;
    }
    
    writeChildren(children)
    {
       return children.map((child)=>(
                         this.writeOutChild(child)
                    ));
    }

    writeOutWithChildren(children, parentId, parentName){
       
        return (
            <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {parentName}
                 </a>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                 
                    {this.writeChildren(children)}

                 </div>

            </li>
        );
        
        
    }

    render(){
        if(this.props.children.length >0){
        
           return( this.writeOutWithChildren(this.props.children, this.props.id, this.props.name));

         }
         else
         {
            return( <li id={this.props.id} key={this.props.id} className="nav-item">
         <Link className="nav-link" to={this.props.url}>{this.props.name}
            </Link></li>);
         
         }
          
    }
}

export default MenuItem;
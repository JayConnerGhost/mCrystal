import React, { Component } from 'react';
import MenuItem from './MenuItem';

class frame extends Component{
        
    buildNavItems(){
        return (
            [
                {_id:1, name:'Home',urlPart:'home.html'},
                {_id:1, name:'Contact',urlPart:'home.html'},
                {_id:1, name:'About',urlPart:'home.html'}
               
            ]
        );
    }

    renderNavItems()
    {
       

        return (            
                this.buildNavItems().map((navItem)=>(
                  <MenuItem id={navItem._id} url={navItem.urlPart} name={navItem.name}/>
                )));
        
    }

    render(){
        return(

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

        );
    }
}

export default frame;
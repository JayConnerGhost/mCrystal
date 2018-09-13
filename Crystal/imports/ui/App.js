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

            <nav>
                <ul>
                    {this.renderNavItems()}

                </ul>
            </nav>

        );
    }
}

export default frame;
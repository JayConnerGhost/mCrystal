import React, { Component } from 'react';

class MenuItem extends Component{
    render(){
        return (
             <li id={this.props.id} key={this.props.id} className="nav-item">
                <a className="nav-link" href={this.props.url}>{this.props.name}</a>
             </li>
        )
          
    }
}

export default MenuItem;
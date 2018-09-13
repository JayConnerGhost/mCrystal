import React, { Component } from 'react';

class MenuItem extends Component{
    render(){
        return (
             <li id={this.props.id}>
                <a href={this.props.url}>{this.props.name}</a>
             </li>
        )
          
    }
}

export default MenuItem;
import React, {Component} from 'react';

class RoomList extends Component{
    constructor(props){
        super(props);
    }

componentDidMount(){
    console.log("here" );
}

    render(){
        return (<h2>rooms {this.props.buildingId}</h2>);
    }
}

export default RoomList
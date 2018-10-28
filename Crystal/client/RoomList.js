import React, {Component} from 'react';

class RoomList extends Component{
    constructor(props){
        super(props);
    }

componentDidMount(){
    console.log("here" );
}

    render(){
        return (<h4>rooms {this.props.buildingId}</h4>);
    }
}

export default RoomList
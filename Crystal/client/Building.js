import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class Building extends Component{
    constructor() {
        super();
      }
  


    render(){
      
       return (
      
       <div className="card" onClick={this.props.onClick}>
       <div className="card-image"><i className="fas fa-building fa-3x"></i></div>
           <div><strong>Name: </strong>{this.props.buildingName}</div>
            <div><strong>Tel:</strong> {this.props.buildingTelephone}</div>          
            <div><strong>Max Occcupancy:</strong>{this.props.buildingOccupancy}</div>           
            <div><strong>Address 1: </strong>{this.props.buildingAddress1}</div>
            <div><strong>Address 2:</strong> {this.props.buildingAddress2}</div>        
            <div><strong>Address 3: </strong>{this.props.buildingAddress3}</div>          
            <div><strong>County: </strong>{this.props.buildingCounty}</div>
            <div><strong>PostCodes: </strong>{this.props.PostCode}</div>  
      </div>
   
        );
    }
}

export default Building;
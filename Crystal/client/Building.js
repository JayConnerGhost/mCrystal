import React , {Component} from 'react';

import Modal from 'react-overlays/lib/Modal';
import findDOMNode from 'react-dom';

class Building extends Component{
     BuildingActivate(buildingName){
            alert("building "+ buildingName);
           
            findDOMNode.render(<Modal/>, modal-mount);
    };


    render(){
      
       return (
      
       <div className="card" onClick={()=>this.BuildingActivate(this.props.buildingId)}>
       <div className="card-image"><i className="fas fa-building fa-3x"></i></div>
           <div><strong>Name: </strong>{this.props.buildingName}</div>
           <div><strong>Max Occcupancy:</strong>{this.props.buildingOccupancy}</div>           
            <div><strong>Address 1: </strong>{this.props.buildingAddress1}</div>
            <div><strong>Address 2:</strong> {this.props.buildingAddress2}</div>        
            <div><strong>Address 3: </strong>{this.props.buildingAddress3}</div>          
            <div><strong>County: </strong>{this.props.buildingCounty}</div>
            <div><strong>PostCode: </strong>{this.props.buildingPostCode}</div>  
      </div>
   
        );
    }
}

export default Building;
import React, {Component} from 'react';

import Building from './Building';

class BuildingList extends Component{
    
constructor(props){
    super(props);
    this.buildingClick = this.buildingClick.bind(this);
}


    buildingClick(buildingId){
        alert('clicked ' + buildingId);
    }
    
    render()
    {
        return (
            this.props.buildings.map((building)=>(
                <Building 
                onClick={()=>this.buildingClick(building._id)}
                buildingId={building._id}
                buildingName={building.name}
                buildingAddress1={building.address1}
                buildingAddress2={building.address2}
                buildingAddress3={building.address3}
                buildingOccupancy={building.maxoccupancy}
                buildingCounty={building.county}
                buildingPostCode={building.postcode}
                />
          
            ))
        );
    }
}

export default BuildingList;
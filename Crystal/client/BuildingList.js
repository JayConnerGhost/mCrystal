import React, {Component} from 'react';

import Building from './Building';

class BuildingList extends Component{
    render()
    {
        return (
            this.props.buildings.map((building)=>(
                <Building 
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
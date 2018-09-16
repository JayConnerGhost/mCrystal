import React, { Component } from 'react';
import {AutoForm} from 'uniforms-bootstrap4';
import BuildingSchema from '../BuildingSchema'

class NewBuildings extends Component{
    insertBuilding(data)
    {
       
        Meteor.call('buildingsInsert',data.name, data.address1, data.address2, data.address3,data.county, data.postcode,data.occupancy,(error, response) => {

            alert(error);
        });
    }
   
    render(){ return(
        <AutoForm
        schema={BuildingSchema}
        onSubmit={(data) => {
            this.insertBuilding(data);
        }}
    />);
    }
}

export default NewBuildings;
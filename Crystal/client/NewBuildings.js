import React, { Component } from 'react';
import {AutoForm} from 'uniforms-bootstrap4';
import NewBuildingFormSchema from '../imports/schema/NewBuildingFormSchema';



class NewBuildings extends Component{
    insertBuilding(data)
    {
       
       Meteor.call('createBuilding',data.name, data.address1, data.address2, data.address3 ,data.county, data.postcode,data.occupancy,(error, response) => {

         
        });
       
    }
   
    render(){ return(
        <AutoForm
        schema={NewBuildingFormSchema}
        onSubmit={(data) => {
            this.insertBuilding(data);
        }}
    />);
    }
}

export default NewBuildings;
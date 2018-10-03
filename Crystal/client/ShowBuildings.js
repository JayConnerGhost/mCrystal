import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BuildingList from './BuildingList';
import '../api/Buildings.js';



class ShowBuildings extends TrackerReact(React.Component){

    constructor() {
        super();
        const subscription = Meteor.subscribe('listAllBuildings');
        this.state = {
          ready: subscription.ready(),
          subscription: subscription
        }
      }
    
      componentWillUnmount() {
        this.state.subscription.stop();
      }
    

    render()
    {
        const buildingList = buildings.find().fetch();
        
           console.log(buildingList);
       
        return( 
           <div className="row buildinglist" >
            <BuildingList buildings={buildingList} />
            </div>
        );
    }
}

export default ShowBuildings;
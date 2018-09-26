import React, {Component} from 'react'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BuildingList from './BuildingList';

if (Meteor.isClient) {
    var Buildings = new Mongo.Collection('buildings');
}


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
        const buildingList = Buildings.find().fetch();
        
           console.log(buildingList);
       
        return( 
           <div className="row">
            <BuildingList buildings={buildingList} />
            </div>
        );
    }
}

export default ShowBuildings;
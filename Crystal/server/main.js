import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

if (Meteor.isServer) {
    var buildings = new Mongo.Collection('buildings');
   
   Meteor.publish('listAllBuildings', function () {
    return buildings.find();
    });
   }



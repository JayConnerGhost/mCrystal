import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'



buildings = new Mongo.Collection('buildings');

Meteor.methods({
    'createBuilding': function(name,address1,address2,address3,county,postcode,occupancy){
        buildings.insert({name: name, address1: address1, address2: address2, address3: address3, county: county, postcode: postcode, maxoccupancy:occupancy}); 
    }
})


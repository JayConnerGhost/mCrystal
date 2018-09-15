import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'
import BuildingSchema from '../BuildingSchema';
const Buildings = new Mongo.Collection('buildings');

Meteor.methods({
    'buildingsInsert': function(name, address1, address2, address3, county, postcode, occupancy){

        return Buildings.insert({
                createdAt: new Date(),
                name:name,
                address1:address1,
                address2:address2,
                address3:address3,
                county:county,
                postcode:postcode,
                occupancy:occupancy,
                createdBy: this.userIdx
        });
    }
})


Buildings.attachSchema(BuildingSchema);
export default Buildings;




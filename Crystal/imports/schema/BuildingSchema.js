import React from 'react';
import SimpleSchema from 'simpl-schema'

const buildingSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Building Name",
        max: 200
    },
    address1: {
        type: String,
        label: "Address Line 1"
      
    },
    address2: {
        type: String,
        label: "Address Line 2",
        optional:true
    },
    address3: {
        type: String,
        label: "Address Line 3",
        optional:true
    },
    county: {
        type: String,
        label: "County",
        optional:true
    },
    postcode: {
        type: String,
        label: "Post Code"
    },
    occupancy: {
        type: Number,
        label: "Max Building Occupancy",
        min: 0
    },
    createdAt: {
        type: Date,
        label: "Date building entered into the system",
        optional: true
    },
    createdByUser: {
        type: String,
        max: 20,
        autoValue: function() {
            return this.userId;
        }
    }

});

export default buildingSchema;
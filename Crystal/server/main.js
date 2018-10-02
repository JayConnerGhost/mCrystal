import { Meteor } from 'meteor/meteor';
import '../api/Buildings';


Meteor.startup(() => {

});


if (Meteor.isServer) {

   
   Meteor.publish('listAllBuildings', function () {
    return buildings.find();
    });
   }




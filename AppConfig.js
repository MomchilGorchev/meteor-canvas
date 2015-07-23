/**
 * Created by momchillgorchev on 01/07/15.
 */


Draggable = new Meteor.Collection('draggable');


if(Meteor.isServer){
    Meteor.publish('draggable', function(){
        return Draggable.find();
    });
}
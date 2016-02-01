Meteor.publish("queries", function () {
    return Queries.find({});
});

Meteor.methods({
    saveQuery: function (query) {
        query.createDate = new Date();
        Queries.insert(query);
        //Calculate load for users
        query.users.forEach(function(userId){
            Meteor.users.update({_id : userId}, {$inc: {"profile.load": 1}});
            Meteor.call('calculateUserGrade', userId);
        });
    },
    date: function(){
        return new Date();
    }
});


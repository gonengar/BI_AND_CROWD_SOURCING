Meteor.publish("queries", function () {
    return Queries.find({});
});

Meteor.methods({
    saveQuery: function (query) {
        query.createDate = new Date();
        Queries.insert(query);
    },
    date: function(){
        return new Date();
    }
});


Meteor.startup(function () {
    if (Queries.find().count() === 0) {
        var queries = [];
        for (var i = 0; i < queries.length; i++)
            Queries.insert({range: queries[i].range, question: queries[i].question});
    }
});

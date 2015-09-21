Meteor.publish("queries", function () {
    return Queries.find({});
});

Meteor.methods({
    saveQuery: function (query) {
        query.createDate = new Date();
        Queries.insert(query);
    },
    saveAnswer: function(query, answer, userId){
        answer.answerDate = new Date();
        query.answers[userId] = answer;
    },
    date: function(){
        return new Date();
    }
});


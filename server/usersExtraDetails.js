Meteor.publish("usersExtraDetails", function () {
    return UsersExtraDetails.find({});
});

Meteor.methods({
    saveAnswerProperties: function (userExtraDetails,feedback, answerTime) {
        userExtraDetails.averageFeedback = (userExtraDetails.averageFeedback * userExtraDetails.numberOfAnswers + feedback) / (userExtraDetails.numberOfAnswers + 1);
        userExtraDetails.averageAnswerTime = (userExtraDetails.averageAnswerTime * userExtraDetails.numberOfAnswers + answerTime) / (userExtraDetails.numberOfAnswers + 1);
        userExtraDetails.numberOfAnswers++;
    }
});
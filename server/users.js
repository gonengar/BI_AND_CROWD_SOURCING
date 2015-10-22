Meteor.publish("users", function () {
  return Meteor.users.find({});
});

Meteor.methods({
  saveAnswerProperties: function (userId,feedback, answerTime) {
    var user = Meteor.users.findOne({_id: userId});
    user.profile.averageFeedback = (user.profile.averageFeedback * user.profile.numberOfAnswers + feedback) / (user.profile.numberOfAnswers + 1);
    user.profile.averageAnswerTime = (user.profile.averageAnswerTime * user.profile.numberOfAnswers + answerTime) / (user.profile.numberOfAnswers + 1);
    user.profile.numberOfAnswers++;

    Meteor.users.update({_id : userId}, user);
  }
});
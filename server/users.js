Meteor.publish("users", function () {
  return Meteor.users.find();
});

Meteor.methods({
  decrementUsersLoad: function(users) {
    users.forEach(function(userId){
      Meteor.users.update({_id : userId}, {$inc: {"profile.load": -1}});
      Meteor.call('calculateUserGrade', userId);
    });
  },
  calculateUserGrade: function(userId){
    var calculateAnswerTimeGrade = function(answerTime){
      var answerTimeThreshold = 30;
      if (answerTime === 0){
        return 5;
      }
      var answerGrade = answerTimeThreshold/answerTime;
      if (answerGrade>5){
        answerGrade = 5;
      }

      return answerGrade;
    };

    var calculateLoadGrade = function(load){
      var loadThreshold = 5;
      return loadThreshold - load;
      //if (load === 0){
      //  return 5;
      //}
      //var loadGrade = loadThreshold/load;
      //if (loadGrade>5){
      //  loadGrade = 5;
      //}
      //
      //return loadGrade;
    };

    var user = Meteor.users.findOne({_id: userId});
    user.profile.grade = user.profile.averageFeedback + calculateAnswerTimeGrade(user.profile.averageAnswerTime ) + calculateLoadGrade(user.profile.load);


    Meteor.users.update({_id : userId}, user);
  },
  saveAnswerProperties: function (userId,feedback, answerTime) {

    var user = Meteor.users.findOne({_id: userId});
    user.profile.averageFeedback = (user.profile.averageFeedback * user.profile.numberOfAnswers + feedback) / (user.profile.numberOfAnswers + 1);
    user.profile.averageAnswerTime = (user.profile.averageAnswerTime * user.profile.numberOfAnswers + answerTime) / (user.profile.numberOfAnswers + 1);
    user.profile.numberOfAnswers++;
    Meteor.call('calculateUserGrade', userId);

    //Add load

    Meteor.users.update({_id : userId}, user);
  }
});
Meteor.publish("departments", function () {
    return Departments.find({});
});


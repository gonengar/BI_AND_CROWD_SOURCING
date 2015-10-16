Meteor.startup(function () {
    if (Queries.find().count() === 0) {
        var queries = [];
        for (var i = 0; i < queries.length; i++)
            Queries.insert({range: queries[i].range, question: queries[i].question});
    }
});


Meteor.startup(function () {
    if (Departments.find().count() === 0) {
        var departments = [
            {
                'name': 'HR',
                'id': '1'
            },
            {
                'name': 'Sales',
                'id': '2'
            },
            {
                'name': 'IT',
                'id': '3'
            }
        ];
        for (var i = 0; i < departments.length; i++)
            Departments.insert({name: departments[i].name, id: departments[i].id});
    }
});

//
//Meteor.startup(function () {
//    if (UsersExtraDetails.find().count() === 0) {
//        var users = Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
//        for (var i = 0; i < users.length; i++) {
//            var user = users[i];
//            var userDepartment;
//            if (user.userName.startWith('h')) {
//                userDepartment = 'HR';
//            }
//            else {
//                if (user.username.startsWith('s')) {
//                    userDepartment = 'Sales';
//                }
//                else {
//                    if (user.username.startsWith('i'))
//                        userDepartment = 'IT';
//                }
//            }
//            UsersExtraDetails.insert({userId: user._id, department: userDepartment});
//        }
//    }
//});


Meteor.startup(function () {
    var users = Meteor.users.find({}).fetch();
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        user.profile = user.profile || {};
        user.emails[0].userDepartment = 1;
        var userAddress = user.emails[0].address;
        if (userAddress.indexOf('h') === 0) {
            user.profile.userDepartment = 'HR';
        }
        else {
            if (userAddress.indexOf('s') === 0) {
                user.profile.userDepartment = 'Sales';
            }
            else {
                if (userAddress.indexOf('i') === 0) {
                    user.profile.userDepartment = 'IT';
                }
                else {
                    user.profile.userDepartment = 'irrelevant';
                }
            }
        }
        Meteor.users.update({_id : user._id}, user);
    }
});
Queries = new Mongo.Collection("queries");

Queries.allow({
  insert: function (userId, query) {
    return userId && query.owner === userId;
  },
  update: function (userId, query) {
    //return userId && query.owner !== userId;
    return true;
  },
  remove: function (userId, query) {
    return userId && query.owner === userId;
  }
});
var User = require("../models/User");

function index(req, res, next) {
  User.find({}, function(err, users) {
    res.send(users);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  User.findById(id, function(err, user) {
    res.send(user);
  });
}

module.exports = {
  index: index,
  show: show
};

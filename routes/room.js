var db = require("../db");
var uuid = require('node-uuid');


var type = "room";

exports.create = function(req, res) {
  var roomId = uuid.v4();
  db.redis.hmset(db.key(type, roomId), {
    userCount: "0"
  });
  res.redirect("/rooms/" + roomId);
};


exports.show = function(req, res) {
  var roomId = req.params.id;
  db.redis.hgetall(db.key(type, roomId), function (err, obj) {
    if (obj !== null) {
      res.render('./room/show', obj);
    } else {
      res.render('./room/not_found');
    }
  });
};
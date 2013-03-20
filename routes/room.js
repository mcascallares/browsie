var redis = require('redis-url').connect();
var uuid = require('node-uuid');

var toRedisKey = function(roomId) {
  return "room." + roomId;
}


exports.create = function(req, res) {
  var roomId = uuid.v4();
  redis.hmset(toRedisKey(roomId), {
    userCount: "0"
  });
  res.redirect("/rooms/" + roomId);
};


exports.show = function(req, res) {
  var roomId = req.params.id;
  redis.hgetall(toRedisKey(roomId), function (err, obj) {
    if (obj !== null) {
      res.render('./room/show', obj);
    } else {
      res.render('./room/not_found');
    }
  });
};
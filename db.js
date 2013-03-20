var redis = require('redis-url')

module.exports.redis = redis.connect()

module.exports.key = function(type, id) {
	return type + "." + id;
}
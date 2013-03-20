
/**
 * Module dependencies.
 */

var express = require('express')
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  home = require('./routes/home'),
  room = require('./routes/room'),
  path = require('path');



app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', home.index);
app.get('/rooms/create', room.create);
app.get('/rooms/:id', room.show);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

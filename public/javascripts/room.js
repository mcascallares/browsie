function Room(roomId) {
	// ui elements
	var goElement = $('#go');
	var iFrameElement = $('#target');
	var urlElement = $('#url');

	// handshake the connection and subscribe to the specified room
	var socket = io.connect('http://localhost');
	socket.emit('subscribe', { roomId : roomId });

	// triggered by the server
	socket.on('browse', function(data) {
		iFrameElement.attr('src', data.url);
    	urlElement.val(data.url);
	});

	// trigerred by the client
	goElement.click(function() {
		socket.emit('goto', { url : urlElement.val() });
	});
};
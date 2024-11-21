const ws = new WebSocket('ws://example.com/socket');
ws.onopen = function() {
  console.log('Connection established');
  ws.send('Hello, server!');
};
ws.onmessage = function(event) {
  console.log('Received message: ' + event.data);
};

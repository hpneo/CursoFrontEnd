window.Pusher = (function() {
  var connections = {};

  return {
    subscribe : function(channel) {
      var url = 'ws://192.168.1.53:1234/' + channel + '/event';

      connections[channel] = new WebSocket(url);

      connections[channel].onopen = function() {
        console.log('Conectado a canal ' + channel);
      };

      connections[channel].onclose = function() {
        console.log("socket closed");
      };

      connections[channel].onmessage = function(evt) {
        console.log(evt);
        var message = JSON.parse(evt.data);
        message['data'] = JSON.parse(message['data']);

        console.log('New message received: ', message);
      };

      return this;
    },
    trigger : function(channel, message) {
      if(connections[channel] != undefined) {
        return connections[channel].send(message);
      }
    }
  };
})();
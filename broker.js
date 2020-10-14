const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = process.env.PORT || 1883;

server.listen({
    host: "0.0.0.0",
    port: port
}, function () {
    console.log(`server listening on address: ${server.address().address}:${server.address().port}`);
});
    
aedes.on("connectionError", function() {
    console.log('client error', client, err.message, err.stack);
});

aedes.on('publish', function (packet, client) {
    if (client) {
        console.log('message from client', client.id)
    }
});
    
aedes.on('subscribe', function (subscriptions, client) {
    if (client) {
        console.log('subscribe from client', subscriptions, client.id)
        console.log(subscriptions[0].topic);
    }
});

aedes.on('client', function (client) {
    console.log('new client', client.id)
});


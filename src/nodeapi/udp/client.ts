import dgram from 'dgram';

const HOST = '0.0.0.0';
const PORT = 30000;
const message = new Buffer('My KungFu is Good!');
const client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
  if (err) throw err;
  console.log('Udp message sent to ' + HOST + ':' + PORT);
  client.close();
});

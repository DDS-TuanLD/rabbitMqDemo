import amqp from "amqplib";
import "dotenv/config";
// create a connection to rabbitMQ server
const connection = await amqp.connect(process.env.RABBIT_SERVER_URL, {
  frameMax: 0,
  heartbeat: 0,
});

//create a channel
const channel = await connection.createChannel();

const queue = process.env.RABBIT_QUEUE_NAME;

//create and connect to queue
await channel.assertQueue(queue, {
  durable: true,
  messageTtl: 5000,
  maxLength: 1000,
});

export default channel;



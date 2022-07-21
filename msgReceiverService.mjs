import { channel } from "./rabbitQueue.mjs";
import "dotenv/config";

let i = 1;
await channel.consume(
  process.env.RABBIT_QUEUE_NAME,
  function (msg) {
    if (i === 10) {
      console.log("Resolve %s", msg.content.toString());
      channel.ack(msg);
      return;
    }
    console.log("Reject %s %d time", msg.content.toString(), i);
    channel.reject(msg);
    i++;
  },
  {
    noAck: false,
  }
);

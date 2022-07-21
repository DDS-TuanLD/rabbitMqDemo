import channel from "./rabbitQueue.mjs";
import "dotenv/config";

const sendMessage = async () => {
  const msg = "hello-receiver";
  channel.sendToQueue(process.env.RABBIT_QUEUE_NAME, Buffer.from(msg));
};

await sendMessage();

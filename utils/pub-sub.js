import pubSubEventKeys from '../events';
import redis from 'redis';

const publisher  = redis.createClient();
const subscriber  = redis.createClient();

const publishGlobalEvents = (event, msg) => {
  publisher.publish(pubSubEventKeys[event], msg)
}

const subscribeGlobalEvents = (event, callback) => {
  callback(subscriber);
  subscriber.subscribe(pubSubEventKeys[event]);
}


module.exports = {
  publishGlobalEvents: publishGlobalEvents,
  subscribeGlobalEvents: subscribeGlobalEvents
};
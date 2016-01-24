/**
 * Created by WeiChen on 2016/1/22.
 */
var url = require('url');
var Router = require('koa-router');
var router = module.exports = new Router();
var kafka = require('kafka-node');
router.post('/kafka', function *() {
    console.log("Kafka connect");
    console.log(this.request.body);
    console.log("to Str");
    var msg = JSON.stringify(this.request.body, undefined, 1);
    console.log(msg);
    var Producer = kafka.Producer,
        client = new kafka.Client('zookeeper1:2181,zookeeper2:2181,zookeeper3:2181'),
        producer = new Producer(client);

    console.log("create producer ok.")
    var topic = "dispatch";
    producer.on('ready', function () {
        var message = 'a message';
        //var keyedMessage = new KeyedMessage('keyed', 'a keyed message');

        producer.send([
            { topic: topic, partition: 0, messages: [msg], attributes: 0 }
        ], function (err, result) {
            console.log(err || result);
        });
    });

    producer.on('error', function (err) {
        console.log('error', err)
    });

    this.body = {
        success: true
    };
});
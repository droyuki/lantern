/**
 * Created by WeiChen on 2016/1/22.
 */
var url  = require('url');
var Router = require('koa-router');
var router = module.exports = new Router();
router.post('/kafka', function *() {
    console.log("Kafka connect")
    var msg = this.request.body
    console.log(msg)
    this.body = {
        success: true
    };
});
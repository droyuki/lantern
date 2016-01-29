/**
 * Created by WeiChen on 2016/1/29.
 */
var url = require('url');
var Router = require('koa-router');
var router = module.exports = new Router();
var fs = require('fs');
var os = require('os');
var path = require('path');
var parse = require('co-busboy');
router.post('/upload', function *() {
    console.log("Upload connect");
    console.log(this.request);
    var parts = parse(this);
    var part;

    while (part = yield parts) {
        var stream = fs.createWriteStream(path.join(os.homedir(), "uploadJar", "userJar.jar"));
        part.pipe(stream);
        console.log('uploading %s -> %s', part.filename, stream.path);
    }

    this.body = {
        success: true
    };
});
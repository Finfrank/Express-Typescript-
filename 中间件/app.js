var express = require("express");
var morgan = require("morgan");
var path = require("path");
var fs = require("fs");
var app = express();
app.use(morgan("short"));
//静态文件服务中间件
app.use(function(req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    next();
});
app.use(function(req, res, next) {
    var filePath = path.join(__dirname, "static", req.url);
    fs.stat(filePath, function(err, fileInfo) {
        if (err) {
            next();
            return;
        }
        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});
//404处理
app.use(function(req, res) {
    res.status(404);
    res.send("File not found!");
});
app.listen(3000, function() {
    console.log("App started on port 3000");
});
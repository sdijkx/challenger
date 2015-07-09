var sys = require("sys")
var http = require("http")
var httpProxy = require('http-proxy')
var url = require("url")
var fs = require("fs")

var proxy = httpProxy.createProxyServer({});

function proxyRequest(req, res) {
    proxy.proxyRequest(req, res, { target:process.env.CHALLENGER_SERVICES_HOST});    
}

function httpError(code, msg, res) {
    res.writeHeader(code, {"Content-Type": "text/plain"});  
    res.write(msg + "\n");  
    res.end();    
}

function error404(res) {
    httpError(404, "404 Not Found", res );
}

function error500(err, res) {
    httpError(500, err, res );
}

function writeFileToResponse(data, res) {
    res.writeHeader(200);  
    res.write(data, "binary");  
    res.end();    
}

function readAndWriteToResponse(path, res) {
    fs.readFile(path, "binary", function(err, data) {  
         if(err) {  
             error500(err, res);
         }  
         else{
             writeFileToResponse(data,res)
         }
    });
}

function staticResource(req, res) {
    var filepath = "." + url.parse(req.url).pathname;
    console.log("read file" + filepath)
    fs.exists(filepath,function(exists){
        if(!exists){
            error404(res);
        } else{
            readAndWriteToResponse(filepath, res)
        }
    });    
}

function route(req, res) {
    if(req.url.match(/^\/challenger-services\/.+$/)) {
        proxyRequest(req,res)
    } else {
        staticResource(req, res)
    }
}

http.createServer(function(request,response){
    route(request, response)
}).listen(8081);
console.log("Server Running on 8081");


// var log =require("./logger")
// log("hello world");
 
// var dt= require('./datemodule');
//     console.log(dt.myDateTime());

// const os =require ("os")
// console.log(os.totalmem())
// console.log(os.freemem())

// var fs =require("fs");
// fs.writeFile("data.txt","hello world",function(err){
//     if(err){
//         console.log(err);

//     }else{
//         console.log("write operation completed");
//     }
// });
var http  = require("http");
http.createServer(function(req,res){
    res.write("This is server call");
    res.end();
}).listen(3000)
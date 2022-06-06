const http = require("http")

const fs = require("fs")

const fsPromises = require('fs').promises;

const server=http.createServer((req,res)=>{

    if(req.url=="/"){
        res.end("hello")
    }

    if(req.url=="/textsync"){
        fs.readFile("./test.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                res.end(err)
            }
            res.end(data)
        })
    }
    if(req.url=="/textasync"){
        fs.readFile("./test.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                res.end(err)
            }
        setTimeout(()=>{
            res.end(data)
        },3000)
        })
    }
    if(req.url=="/textstream"){
        const readStream=fs.createReadStream("/test.txt")
        readStream.pipe(res)
    }
    if(req.url=="/textpromise"){
        fsPromises.readFile("./test.txt")
        .then(function(result) {
        console.log(""+result);
        res.end(result)
        })
        .catch(function(error) {
        console.log(error);
        res.end(error)
        })
    }
})

server.listen(8080,()=>{

console.log("Server running on port http://localhost:8080/*")

})
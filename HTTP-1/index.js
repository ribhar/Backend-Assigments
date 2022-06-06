const http = require("http")

const server = http.createServer((req,res)=>{
    console.log(req)
    // res.write("more")
    res.setHeader("content-type",'application/plain')
    res.end("[1,2,3,4]")
    
})

server.listen(8080,()=>{
    console.log("Server started on port 8080")
})
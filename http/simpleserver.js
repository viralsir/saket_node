let http=require("http")

let server=http.createServer((request,response)=>{
    response.end("<h1>hi from server</h1>");
})

server.listen(9090,()=>{console.log("server is running or port no 9090")})


//  http://localhost:9090/

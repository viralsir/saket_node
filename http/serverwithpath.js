let http=require("http")
let url=require("url")

let homepage=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>home</title>
</head>
<body>
<h1>
    <a href="about">About us</a> | <a href="contactus">Contactus</a>
</h1>
</body>
</html>`


let server=http.createServer((request,response)=>{
    let urlinfo=url.parse(request.url);
    console.log(urlinfo);
    if(urlinfo.pathname != '/favicon.ico')
    {
        console.log(urlinfo.path);
        if(urlinfo.path=='/about')
        {
            response.write("<h1>About us page from Server </h1>");
        }
        else if(urlinfo.path=='/contactus')
        {
            response.write("<h1>Contact us page from server</h1>");
        }
        else{
            response.write(homepage);
        }
    }
    response.end();

})

server.listen(9090,()=>{console.log("server is running on port 9090")})

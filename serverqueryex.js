var http = require("http")
var url = require("url")

var homepage=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>home</title>
</head>
<body>
<h1>
    <a href="about">About us</a> | <a href="contactus">Contactus</a> 
    | <a href="signup">SignUp</a>
</h1>
</body>
</html>`
var signuppage=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Signup</title>
</head>
<body>  
<form action="/createUser">
    UserName : <input type="text" name="user"> <br/>
    Password : <input type="password" name="password"><br/>
    <input type="submit" value="login">
    
    
</form>
</body>
</html>`;
let userinfo=[
    {"user":"admin","password":"123"},
    {"user":"xyz","password":"456"}
]

var server = http.createServer((request,response)=>
{
    var urlinfo = url.parse(request.url,true);
    if(urlinfo.pathname != '/favicon.ico') {
        console.log("path :", urlinfo.path);
        console.log("pathname:", urlinfo.pathname)
        if (urlinfo.path == '/about') {
            response.write("<h1>About us page from Server </h1>");
        } else if (urlinfo.path == '/contactus') {
            response.write("<h1>Contact us page from server</h1>");
        } else if (urlinfo.path == '/signup') {
            response.write(signuppage);
        } else if (urlinfo.pathname == '/createUser') {
            var logininfo = urlinfo.query;
            userinfo.push(logininfo);
           // console.log(userinfo);
            response.write("user added")
        } else {
            response.write(homepage);
        }
    }
    response.end();

})

server.listen(9090,()=>{console.log("server is running on port 9090")})

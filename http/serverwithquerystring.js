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
    | <a href="login">Login</a>
</h1>
</body>
</html>`
let loginpage=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>  
<form action="/checkUser">
    UserName : <input type="text" name="user"> <br/>
    Password : <input type="password" name="password"><br/>
    <input type="submit" value="login">
    <input type="reset" value="clear">
    
</form>
</body>
</html>`;

let userinfo=[
    {"user":"admin","password":"123"},
    {"user":"vimal","password":"456"}
]


let server=http.createServer((request,response)=>{
    let urlinfo=url.parse(request.url,true);
    //console.log(urlinfo);
    if(urlinfo.pathname != '/favicon.ico')
    {
        console.log("path :",urlinfo.path);
        console.log("pathname:",urlinfo.pathname)
        if(urlinfo.path=='/about')
        {
            response.write("<h1>About us page from Server </h1>");
        }
        else if(urlinfo.path=='/contactus')
        {
            response.write("<h1>Contact us page from server</h1>");
        }
        else if(urlinfo.path=='/login')
        {
            response.write(loginpage);
        }
        else if(urlinfo.pathname=='/checkUser')
        {
            let logininfo=urlinfo.query;

            let user=userinfo.find(element=>element.user==logininfo.user && element.password==logininfo.password)

            if(user != undefined)
            {
                response.write("<h1>login successfull");
            }
            else
            {
                response.write("<h1>wrong username or password</h1>");
            }
               // console.log(urlinfo.query);


        }
        else{
            response.write(homepage);
        }

    }

    response.end();

})

server.listen(9090,()=>{console.log("server is running on port 9090")})

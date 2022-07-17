let express=require("express")
let app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


let userdetails=[]

app.get("/home",(req, res) => {
    //res.send("<h1>Home Page</h1>")
    res.sendFile(__dirname+"\\home.html")
})
app.get("/aboutus",(req, res) => {
  //  res.send("<h1>Contact Us Page</h1>")
   res.sendFile(__dirname+"\\aboutus.html")
})

app.get("/contactus",(req, res) => {
    res.sendFile(__dirname+"\\contactus.html");
})

app.get("/login",(req, res) => {
    //res.send("<h1>Login Page</h1>")
    res.sendFile(__dirname+"\\login.html")

})

app.get("/signup",(req, res) => {
    //res.send("<h1>Signup Page</h1>")
    res.sendFile(__dirname+"\\signup.html")

})

app.post("/checkUser",(req, res) => {

    let user=userdetails.find(element=>element.username=req.body.username && element.password==req.body.password);

    if(user!=undefined)
    {
       // res.send("<h1>login successfull</h1>")
        res.sendFile(__dirname+"\\home.html")
    }
    else
    {
        res.send("<h1>wrong username or password </h1>");
    }

})

app.post("/register",(req, res) => {
    console.log(req.body);
    userdetails.push(req.body)
    res.send("register page");
})


app.listen(9090,()=>{console.log("server is running at post : 9090")})

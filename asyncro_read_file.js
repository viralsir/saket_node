let fs=require("fs")

fs.readFile("demo.txt",(err,data)=>{
    if(!err)
    {
        console.log(data.toString());
    }
    else
    {
        console.log(err)
    }
})

console.log("statement1 after read file ")
console.log("statement2 after read file ")

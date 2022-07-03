let fs=require("fs")

let msg="third line of file ";

fs.writeFile("demo.txt",msg,{flag:"a+"},err => {
    if(!err)
    {
        console.log("file has been created.");
    }
    else
    {
        console.log(err)
    }
})

console.log("statement1 after file write");
console.log("statement2 after file write");

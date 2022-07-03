let fs=require("fs")

let data=fs.readFileSync("demo.txt");
console.log(data.toString());
console.log("statement1 after read file ")
console.log("statement2 after read file ")

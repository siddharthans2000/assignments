var fs=require("fs")

function readFile(){
    fs.readFile("a.txt","utf-8",function(err,data){
        console.log(data)
    })
}
readFile()
console.log("Hi word")
let b=0
for(let i=0;i<10000000000;i++){
    b++
}
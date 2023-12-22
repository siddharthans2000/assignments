var fs=require("fs")

var a="Hi i hope this is working pretty good"
function writeToFile(){

    fs.writeFile("a.txt",a,{encoding:"utf-8",mode: 0o666,flag:"wx+"},function(err){
        if (err){
            console.log(err)
        }
        else{
            console.log("Data written in file completed")
        }
    })
}
writeToFile()

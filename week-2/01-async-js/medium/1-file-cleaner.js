var file=require("fs")

function cleanFile(){
    file.readFile("file.txt","utf-8",function(err,data){
        var value=data.split(" ");
        var data=[];
        for(let i=0;i<value.length;i++){
            if(value[i].length!=0){
                data.push(value[i]);
            }
        }
        var data=data.join(" ")
        console.log(data);
    })
}
cleanFile()
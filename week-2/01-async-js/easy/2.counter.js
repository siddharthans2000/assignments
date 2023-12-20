let cnt=0

function print(){
    console.log("This block ran ",cnt++,"times")
}

setTimeout(print,1000)
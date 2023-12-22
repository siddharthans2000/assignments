function PrintTimeFormat1(){
    var date=new Date()
    let hour=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()

    let format=hour+":"+minutes+":"+seconds
    console.log(format)
}

function PrintTimeFormat2(){
    var date=new Date()
    var dt_ampm=date.toLocaleTimeString()
    console.log(dt_ampm)
}
// setInterval(PrintTime,1000)
setInterval(PrintTimeFormat2,1000)
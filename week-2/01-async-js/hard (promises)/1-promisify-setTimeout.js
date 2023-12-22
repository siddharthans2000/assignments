/*
    Write a function that returns a promise that resolves after n seconds have passed, 
    where n is passed as an argument to the function.
*/

function wait(n) {
    var a=new Promise(function(resolve){
        setTimeout(resolve,1000*n);
    });
    return a;
}



module.exports = wait;

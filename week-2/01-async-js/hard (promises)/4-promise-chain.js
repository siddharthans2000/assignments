/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,1000*t);
    });
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,1000*t);
    });
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,1000*t);
    });
}

async function calculateTime(t1, t2, t3) {
    var before=new Date()
    var p1=await wait1(t1)
    var p2=await wait2(t2)
    var p3=await wait3(t3)
    var after=new Date()
    return after-before
}

module.exports = calculateTime;

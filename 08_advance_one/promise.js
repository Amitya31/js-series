const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve() // here resolve will connect to then after that the promise will be consumed
    }, 1000)
}) // creating  a promise

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})// consuming the promise
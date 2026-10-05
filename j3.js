function outer (){
    function inner (){
        console.log("Hello from inner function");
    }
    return inner;
}

let returnedFuncVar=outer();
console.log(returnedFuncVar);
returnedFuncVar();
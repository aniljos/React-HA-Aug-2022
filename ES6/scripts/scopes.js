//var x; var y;

console.log("Scopes.js");

console.log("x: ",x);  // undefined

var x = 10; //global 
console.log("x: ",x); // 10

var y;
console.log("y: ",y); // undefined

//console.log("z: ", z); // reference error


function foo(){
    // var msg

    console.log("in foo");

    if(x > 5){

        let msg = "Hello";
        console.log("msg", msg); //Hello
    }

    
   
}
foo();

console.log("App over");




// function statement
//implicits args => this, arguments
function sum(x, y){
    console.log("in sum...", arguments);
}

// function sum(){
//     console.log("in sum no args...");
// }

sum(2,3);
sum();
sum(2,3,4,5);


//function expression
var add = function(x, y){
    console.log("in add");
}
add();

// arrow functions
var calc = (x, y)=> {

    console.log("in calc");
}
calc(2,3);

calc = (x,y) => console.log("in calc", x, y);
calc(8, 9);

let squareIt = x => x * x;
console.log("squareIt", squareIt(13));


const obj = {
    id: 10,
    print: function(){
        console.log("Printing obj Id: ", this.id);

        setTimeout(()=>{
            console.log("Printing obj Id after 2s: ", this.id);
        }, 2000);
    }
}

obj.print();
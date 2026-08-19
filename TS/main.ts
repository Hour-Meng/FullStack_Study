// Var stands for variable

var n1 = 2;
let n2 = 10;


function simpleMath() {
    for ( var i = 0; i < 5; i ++){
        console.log(i + 1);
    }
}

simpleMath();

let some;

some = "abc";
let endsWithC = some.endsWith('c');

console.log(endsWithC);
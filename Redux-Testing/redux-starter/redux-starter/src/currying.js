//Simple Function with 2 parameters
function add1(a, b) {
    return a + b;
}

//A good function should have 1 parameter
//This will work
function add2(a) {
    return function (b) {
        return a + b;
    };

}

//shortcut
const add3 = a => b => a + b;

add2(1)(5); //call function

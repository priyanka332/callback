//  1st question


function name1(name,surname) {
    console.log(name + " " + surname);
}

function name2(callback) {
    callback("Puja","kumari")
}

name2(name1)




//  2nd question


function fun1() {
    console.log("Now start from 6");
    for (var i=6; i<=10;i++) {
        console.log(i);
    }
}
function fun2(num) {
    for(var i=1;i<=5;i++) {
        console.log(i);
    }
    num()
}
fun2(fun1)




//  3rd question


function fun1(second,callback) {
    callback(`Priyanka ${second}`)
}

function fun2(name) {
    console.log(name);
}

fun1("Kumari",fun2)




//  4th question


function fullName(first) {
    var second = "Gurukul"
    console.log(first+second);
}
function fun(num) {
    num
}
fun(fullName("Nav"))




//  5th question


function fun1() {
    console.log("Gurukul");
}
function fun2(num) {
    console.log("Nav");
    num()
}
fun2(fun1)
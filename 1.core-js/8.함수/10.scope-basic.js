

function foo(x) {
    var y = 10;
    console.log(x);
    console.log(y);
}
console.log('==============================');
// console.log(x);
// console.log(y);

foo(5);

console.log('==============================');

var z = 'global'; //전역변수
function bar() {
    var z = 'local'; //지역변수
    console.log(z);
}
bar();
console.log(z);



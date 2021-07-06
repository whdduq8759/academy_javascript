

//명시적 문자열 변환
var a = 10, b = 20;

// 1번
var result = String(a) + String(b);
console.log(result);

// 2번
var result = a.toString() + b.toString();
console.log(result);

// 3번
var result = '' + a + b;
console.log(result);


//명시적 숫자 벼환
console.log('=================================');

var m = '100', n = '5.11';

// 1번
var result2 = Number(m) + Number(n);
console.log(result2);

// 2번
var result2 = parseInt(m) + parseFloat(n);
console.log(result2);

// 3번
var result3 = (+m) + (+n);
console.log(result2);


//명시적 논리 변환
console.log('=================================');

var ex1 = Boolean(undefined);
console.log(ex1);

var ex2 = !!'메롱';
console.log(ex2);


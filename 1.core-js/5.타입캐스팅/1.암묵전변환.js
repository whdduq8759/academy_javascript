
// 10 + '20' = '10' + '20'
// 문자열은 + 연산만 가능하다 (- 연산은 안됨) 
var ex = 10 + '20';
console.log(ex);

// 100 + '' = String
ex = 100 + '';

var a = true + '';
console.log(typeof a);

// 100 - '30' = 70 
// 문자열이 숫자로 바뀐다
var x = 100 - '30';
console.log(x);

// 연산이 가능하지 않는 문자열이 포함되어 있으면 NaN를 출력한다
var y = 100 - '30hello';
console.log(y);

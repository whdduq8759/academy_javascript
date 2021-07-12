

// 원의 넓이: pi * r ** 2

//반지름이 5인 원의 넓이를 구해야 함
var circle1 = 3.14159 * 5 ** 2;
//반지름이 10
var circle2 = 3.14159 * 10 ** 2;

//////////////////////////////////////// 다른 작업 //////////////////////////////////////////
var circle4 = 31.4159 * 100 * 2;

//함수의 정의
function calcAreaCircle(r) {
    var areaCircle = 3.14159 *  r ** 2;
    return areaCircle;
}

//함수의 호출
var result1 = calcAreaCircle(5);

console.log(result1);

//반지름 10 
var result2 = calcAreaCircle(10);
console.log(result2);


//함수의 정의 2 : 함수 리터럴
function add1(n1, n2) {
    return n1 + n2;
}

add1(10, 20);

//함수 리터럴
var add2 = function(n1, n2) {
    return n1 + n2;
};

add2(30, 50);

//함수를 변수에 할당
// 뒤에 괄호는 뺴고 설정!
var cac = calcAreaCircle;
cac(5);



 




// 두 수의 덧셈 결과를 호출부로 전달하는 함수
function add(n1, n2) {
    return n1 + n2;
}

// 두 수의 곱셈의 결과를 콘솔창에 출력하는 함수
function showMultiply(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
    
}

// break 대신 return을 사용해도 반복문이 끝난다.
function infLooping() {
    var n = 1;
    while(true) {
        console.log(n);
        if(n === 5 ) return;
        n++;
    }
}

// 함수가 반환할 수 있는 값은 단 하나입니다.
// 그런데 2개의 정수를 전달받아 덧셈,뺄셈,곱셈,나눗셈 값을 모두 리턴하고 시팔.
function operateAll(n1, n2) {
    return {
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2
    };
}


var result = add(10, 20);
console.log(result);

console.log(add(5, 10)); // = log(15);
// 가장 안쪽부터 계산하고 그다음엔 왼쪽부터 오른쪽 순으로 계산 됨
var result2 = add(add(10, 10),  add(add(15, 5), 20));
 

// 리턴값이 없는 함수는 변수에 저장하거나 다른 함수의 인수로
// 전달하지 않고 단독호출해서 사용합니다.
showMultiply(5,4);

infLooping();

var result = operateAll(20, 5);
console.log(`덧셈결과: ${result.plus}`);
console.log(`뺼셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multi}`);
console.log(`나눗셈결과: ${result.divide}`);
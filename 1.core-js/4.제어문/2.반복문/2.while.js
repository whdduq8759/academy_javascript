//1~10까지의 등차수열 누적합

//총합을 저장할 변수
var total = 0;

//더할 값들을 저장할 변수
var n = 1;  //제어변수: 반복문의 횟수를 제어할 변수, 시작의 의미를 가짐
while(n <= 10) { //조건식: 반복문의 종료시점을 결정, 끝의 의미를 가짐
    total += n;
    n++; // 증감식: 반복문의 종료를 위한 식 
}
console.log(`총합: ${total}`);


//1~100 사이의 정수 중 13의 배수 모두 출력하기
var n = 1;
while(n <= 100) {
  if(n % 13 ===0) {
      console.log(n);
  }
    n++;  
}
console.log('================================');
var num = 1;
while(num <= 100){
    if(num % 6 === 0 && num % 12 !== 0){
        console.log(num);
    }
    num++;
}

console.log('================================');
var num2 = 1;
var count = 0;
while(num2 <= 4000) {
    if(num2 % 9 === 0){
        count++;
    }
    num2++;
}
console.log(`${count}개`);


// 배열 생성
var fruits = ['딸기', '포도', '복숭아', '사과'];

// 배열의 길이
console.log(fruits.length);

// 배열 요소 참조 
console.log(fruits[2]);

// 자주 쓰는 배열을 변수에 저장하고 사용
var apple = fruits[3];
console.log(apple);

// 배열 요소 수정
fruits[1] = '수박';
console.log(fruits);

// 배열 요소 추가
fruits[4] = '파인애플';
fruits[5] = '망고';
console.log(fruits);

// 배열 요소 순회 (전체참조)
// 범위를 fruits.length;로 설정하면 추가 삭제되도 배열에 있는 수 만큼 설정됨
for(var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// splice() : 배열 요소 삭제
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

// 1번 인덱스부터 (자기 포함해서) 2개를 삭제함
// splice는 삭제된 요소를 다시 배열로 만들어 복사본을 리턴
var spl = foods.splice(1, 2);
console.log(foods);
console.log(spl);

// 0번 인덱스로부터 1개를 삭제하고 그 자리에 '치킨'을 삽입
foods.splice(0, 1, '치킨');
console.log(foods);

// 중간에 배열을 추가하는 것
foods.splice(1, 0, '보쌈');
console.log(foods);

// 2번부터 끝까지 삭제
foods.splice(2);
console.log(foods);

// 특정요소를 탐색하여 삭제
console.log('================');
foods.push('족발');
foods.push('닭발');
foods.push('파스타');

console.log(foods);

// 사용자의 삭제 요구 데이터
var req = '파스타';

if(foods.includes(req)) {
        foods.splice(foods.indexOf(req), 1 );
        console.log(`${req} : 삭제완료`);
        console.log(foods);
} else {
    console.log(`${req} : 존재하지 않는 음식입니다.`);
}
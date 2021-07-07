

var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

// indexOf() : 배열 요소의 인덱스를 알려줌
// 배열에 없는 것을 탐색 시 -1을 출력함
var idx =  foods.indexOf('오뎅');

console.log(idx);

// includes() : 배열 요소의 존재 유무 확인
console.log('================================');
var inc = foods.includes('김말이');

console.log(inc);

// slice() : 배열을 잘라내어 복사함
console.log('================================');
var arr = [0,1,2,3,4,5,6,7,8,9];
// 3이상 7미만
var sli = arr.slice(3, 7);
console.log(sli);

//원본배열은 변하지 않음
console.log(arr);

// 6번부터 끝까지 추출
var sil2 = arr.slice(6);
console.log(sil2);

// reverse() : 배열을 역순으로 배치함, 단 원본이 변화함
console.log('================================');
arr.reverse();
console.log(arr);

// 원본을 변화시키지 않고 역순 정렬하려면 복사본을 이용
var copyArr = arr.slice(0);
var rev = copyArr.reverse();
console.log(rev);

// join() : 배열의 요소들을 연결된 문자열로 변환
console.log('================================');
var foodStr = foods.join('랑 ');
console.log(foodStr);

// concat() : 배열을 연결 복사배열을 리턴
console.log('================================');
var con = arr.concat([100, 200, 300]);
console.log(con);
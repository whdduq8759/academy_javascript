// 객체생성
var dog = {
    name: '뽀삐',
    kind: '시츄',
    age: '2짤',
    favorite: ['산책', '간식'],
    injection: true
};

var cat = {
    name: '콩순이',
    kind: '코솟',
    age: '3짤',
    favorite: ['낮잠', '캣타워'],
    injection: false
};

// 객체 프로퍼티 참조
console.log(dog.favorite);
console.log(cat.favorite[0]);
dog.favorite.push('머리 흔들기');
console.log(dog.favorite);

// 프로퍼티 참조 2번째 방법
console.log(dog['age']); // 대괄호참조시에는 키를 문자열로 해야함


// 프로퍼티 값 수정
dog.age = '5짤';
console.log(dog);

cat.favorite[1] = '참치';
console.log(cat);

// 프로퍼티 동적 추가
dog.master = '김철수';
console.log(dog);

// 프로퍼티 삭제
delete dog.master;
console.log(dog);

// 객체 프로퍼티 전체 순회
// for ~ in
console.log('==========================');

for (var key in cat) {
    var value = cat[key];

    console.log(`${key}: ${value}`);
}

console.log('==========================');

// 객체의 프로퍼티 키 존재 유무 확인
var flag = 'kind' in cat;
console.log(flag);

var key = 'favorite'; 

if(key in dog) {
    console.log('해당 키는 존재합니다.');
} else {
    console.log('해당 키는 존재하지 않습니다.');
}

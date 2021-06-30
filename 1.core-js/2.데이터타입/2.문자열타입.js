
var greeting;
greeting = 'hello';
greeting = "안녕하세유";
greeting = `gg`;
console.log(typeof greeting);

var exStr = '그는 나에게 "위험해"라고 말했다!';
console.log(exStr);

exStr = "Let's go!'";
console.log(exStr);

var exStr = "그는 나에게 \"위험해\"라고 말했다!";

var filePath = 'D:\\temp\\new.jpg';
console.log(filePath);

//템플릿 리터럴
// 문자열인데 줄개행을 하고 싶을 때 백틱을 사용한다.
console.log('====================================');
var template = `<ul>
    <li>
        <a href="">Home</a>
    </li>
</ul>
`;

console.log(template);

console.log('====================================');

var month = 8;
var day = 15;
var anni = '광복절';

console.log(month + '월은 ' + day + '일은 ' + anni + '입니다.');

console.log(`${month}월은 ${day}일은 ${anni}입니다.`);

var x = '100';
var y = 200;
console.log(x + y);

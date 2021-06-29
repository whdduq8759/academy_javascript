// 식별자: 데이터를 구분하기 위한 고유의 이름
//  1. 대소문자를 구분할 것
var banana = '바나나';
var BAMAMA = '버네이너';

// 2. 숫자로 시작하면 안된다.
// var 7 = 99; X
// var 99haha = 100; X
var number3 = 3;
var had234dsn = 1;

// 3. 특수문자는 _, $ 외 사용금지
// var my-name = '홍길동';
// var hello! = '안녕';
var _hello = '안녕';
var my$name = 13;

// 4. 띄어쓰기 불가능
// var user phone number = '010-1234-1234';

//  관례: convetion
var user_phone_number = 1;   //snake case
var userPhoneNumber = 1;  //camel case
var UserPhoneNumber = 1;   //pascal case : 클래스 이름 지을 때 사용

// Hungrian case : 변수명 앞에 데이터의 모양을 표기
var strName = '홍길동';
var numPoint = 70;

// 변수이름은 구체적이고 명확하며 일관되게 지어라

// 5. 키워드는 식별자 이름으로 사용 불가능
 


if('') console.log('ok1');  //빈 문자열  false
if(' ') console.log('ok2'); // 공백 문자열 true
if(undefined) console.log('ok3');
if(null) console.log('ok4');
if(NaN) console.log('ok5');
if(46545654) console.log('ok5');
if(0) console.log('ok6');
if([1,2,3]) console.log('ok7');
if([]) console.log('ok8'); // 괄호안에 데이터가 없어도 true
if({}) console.log('ok9'); // 괄호안에 데이터가 없어도 true

console.log('==================================');

var orangeJuice = 10;
if(orangeJuice) {
    console.log('오렌지 쥬스가 있습니다.');
} else{
    console.log('오렌지 쥬스가 없습니다.');
}


var count1 = 0;
var count2 = 0;

while (true) {

    var num1 = Math.floor(Math.random() * 100) + 1;
    var num2 = Math.floor(Math.random() * 100) + 1;

    // 0과 1이 랜덤으로 등장하게 한후 0이면 +로, 1이면 -로 치환
    var rn = Math.floor(Math.random() * 2);
    var mark = rn === 0 ? '+' : '-';

    var answer = +prompt(`${num1} ${mark} ${num2} = ??`);

    if (answer === 0) break;

    var total;

    if (mark === '+') {
        total = num1 + num2;
    } else {
        total = num1 - num2;
    }

    if (answer === total) {
        alert('정답입니다.');
        count1++;


    } else {
        alert('오답입니다.');
        count2++;

    }


}

alert(`프로그램이 종료되었습니다.\n # 정답횟수 ${count1}회, 오답횟수 ${count2}회`);
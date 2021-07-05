// 구구단 2단을 출력해야 함

var table = 2;
for (var table = 2; table <= 9; table++) {
    console.log('======================================');
    console.log(`# 구구단 ${table}단`);
    console.log('======================================');
    for (var line = 1; line <= 9; line++) {
        console.log(`${table} x ${line} = ${table * line}`);
    }
}

var count = 1;
for(var i = 0; i < 5; i++) {
    for(var j = 0; j <3; j++){
    console.log('안녕~' + count++);
    }
}
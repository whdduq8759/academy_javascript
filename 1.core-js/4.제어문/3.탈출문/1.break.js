
for(var i = 1; i <= 10; i++){
    if(i > 5){
    break;
    }
    console.log(i);
}
console.log('반복문 종료');



console.log('=====================================');
// break는 가장 가까운 반복문을 부숨

for(var i = 0; i < 3; i++){
    for(var j = 0; j < 2; j++) {
        if(i === j) break;
        console.log(`${i}, ${j}`);
    }
}
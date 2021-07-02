
var total = 0;
for(var n = 1; n <= 10; n++) {
    total += n;  
}
console.log(`총합: ${total}`);


for(var n = 1; n <= 100; n++) {
  if(n % 13 ===0) {
      console.log(n);
  }
}

console.log('================================');

for(var num = 1; num <= 100; num++){
    if(num % 6 === 0 && num % 12 !== 0){
        console.log(num);
    }
}


console.log('================================');
var count = 0;
for(var num2 = 1; num2 <= 4000; num2++) {
    if(num2 % 9 === 0){
        count++;
    }
}
console.log(`${count}개`);




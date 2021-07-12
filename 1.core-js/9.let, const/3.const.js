// const는 값변경이 불가능한 변수이다
const pi = 3.14159265;
pi = 6.666;

const TAX_RATE = 0.1;

let preTaxPrice = 100; // 세전가격

let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE); // 세후가격

//const와 객체 (배열, 객체)
const person = {
    name: 'park',
    
};

// person = {
    //     name : 'lee'
    // };
    
    person.name = 'kim';
    person.age = 20;
    
    const arr = [1,2,3];
    // arr = [a,b,c];
    
    arr[1] = 20;
    
    
    
    
    
    
    
    //--------------------------------------------------------------------------------------------------//
    
    // 전역변수
    var x = 10;
    var y = 20;
    
    //함수
    function foo() {
        
    }
    function bar() {
        
    }
    
    // 즉시 실행 함수
    (function () {
        //실제 실행코드
        foo();
        var z = 10;
        bar();
    } )();
        
        
        
// 전역변수
const todos =[
    {
        id: 1,
        text: '할 일 1',
        done: false
    },
    {
        id: 2,
        text: '할 일 2',
        done: false
    },
    {
        id: 3,
        text: '할 일 3',
        done: false
    }
];
// 함수 정의부


// 추가될 새로운 할 일의 신규 아이디를 만들어서 리턴하는 함수
function makeNewId() {
    if(todos.length > 0) {
    const lastObject = todos[todos.length-1];
    return lastObject.id + 1;
    } else { // 기존 데이터가 한개도 없는 경우
        return 1;
    }
}

// 새 할 일을 화면에 렌더링하는 함수
function renderNewToDo(newToDo) {
    const newElement = `
    <li data-id="${newToDo.id}" class="todo-list-item">
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newToDo.text}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
</li>
    `;

    const $toDoList = document.querySelector('.todo-list');
    $toDoList.innerHTML += newElement;

}

// 할 일의 내용이 잘 입력되었는지 검사하는 함수 
    // trim() : 문자열의 앞뒤 공백을 모두 제거
function validateInputText($targetInput) {
    if($targetInput.value.trim() === '') {
        $targetInput.classList.add('change');
        $targetInput.setAttribute('placeholder', '필수 입력사항입니다!');
        $targetInput.value= '';
        return false;
    } else{
        $targetInput.classList.remove('change');
        $targetInput.setAttribute('placeholder', '할 일을 입력하세요');
        return true;
    }
}

// 할일 추가 기능 처리 함수
function insertTodoData() {

    const $todoText = document.getElementById('todo-text');

    // 입력값 검증
    if (!validateInputText($todoText)) return;

    // 1. 데이터 처리 : 필요한 데이터를 생성하여 todos배열에 추가
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo);
    // console.log(todos);

    // 2. 추가된 데이터를 화면에 렌더링
    renderNewToDo(newToDo);

    // 3. 입력 완료 후 input창 텍스트 지우기
    $todoText.value = '';

 
}

// 메인 실행부
(function() {
    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();  //submit 전송기능 중단

        insertTodoData();
    
    }) 
})();
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
    const $li = document.createElement('li');
    $li.dataset.id = newToDo.id;
    $li.classList.add('todo-list-item');
    const newElement = `
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newToDo.text}</span>
    </label>
    <div class="modify"><span class="lnr lnr-undo"></span></div>
    <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
</li>
    `;
    $li.innerHTML = newElement;

    const $toDoList = document.querySelector('.todo-list');
    $toDoList.appendChild($li);

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
// data-id값으로 배열을 탐색하여 아이디가 일치하는 객체의 인덱스를 반환
function findIndexByDataId(dataId){
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].id === dataId) {
            return i;
        }
    }
    return null; // 탐색 실패 증거로 null을 반환 못찾겠다 꾀꼬리
}

// 할 일 완료 처리 함수 정의
function changeCheckState($label) {
    // 1. 체크가 된 label태그에 checked클래스를 추가해야 함.
    // 2. 이 함수에는 체크가 된 label태그의 정보가 필요함.
    // 3. 이 label태그는 이벤트 핸들러가 알고 있음.
    
    $label.classList.toggle('checked');
    
    // 4. 문제상황: css만 변했지 실제 데이터(done)는 변하지 않음.
    // 5. 만약 서버가 있었다면 서버에 완료상태를 반영해줘야 함.
    // 6. todos배여르이 객처에 접근해서 done값을 변경해줘야 함.
    // 7. 만약에 두번째 체크박스를 선택했다면 todos배열의 1번인덱스의 done값을 수정해야 한다.
    // 8. label태그의 정보를 알고 있다면 그 부모태그 li에 접근할 수 있고 그 태그의 data-id속성을 조회하면 객체의 id값을 얻을 수 있음.
    
    console.log($label.parentNode.dataset.id);
    const $dataId = +$label.parentNode.dataset.id;
    // 9. id값을 기반으로 배열을 탐색하여 data-id와 일치하는 id프로퍼티를 가진 객체가 있는 인덱스를 찾아야 함.
    const idx = findIndexByDataId($dataId);
    // console.log(`idx: ${idx}번`);

    // 10. 찾은 인덱스로 해당 객체에 접근해서 done값을 수정
    if(idx !== null){
    todos[idx].done = !todos[idx].done;
    }
    // console.log(todos);
    
}

// 할 일 삭제 처리 함수
function removeToDoData($delTarget) {
    // 1. 삭제 대상 li태그를 ul에서 제거해야 함
    const $ul = document.querySelector('.todo-list');
    $ul.removeChild($delTarget);

    // 2. todos배열에서 해당 객체 삭제
    const delIdx = findIndexByDataId(+$delTarget.dataset.id);
    todos.splice(delIdx, 1);
    console.log(todos);
}

// 할 일 수정 처리 함수
function newTitleToDoData($newTarget) {

    // 1. 수정 대상 li태그를 input으로 만들어야 함
  
    const $check = $newTarget.children[0].lastElementChild;
    console.log($check);

     const $input = createElement('input');
     $input.setAttribute('type', 'text');
     $newTarget.children[0].replaceChild($input, $check);



}


// 메인 실행부
(function() {
    // 할 일 추가 이벤트
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault();  //submit 전송기능 중단

        insertTodoData();
    
    }) 

    // 할 일 완료(체크박스) 이벤트
    const $todoList = document.querySelector('.todo-list');

    $todoList.addEventListener('change', e => {
        console.log('체크박스 이벤트 발생!');
        
        // console.log(e.target.nextElementSibling);

        // 체크박스에 변화가 생겼을 때 CSS변동 처리 함수 호출
        changeCheckState(e.target.parentNode);

    });

        // 할 일 삭제버튼 클릭 이벤트
        $todoList.addEventListener('click', e => {
            if(!e.target.matches('.remove span')) return;

            // console.log('삭제 버튼 클릭됨!', e.target); 
            // console.log(e.target.parentNode.parentNode);

            removeToDoData(e.target.parentNode.parentNode);
        });

        // 할 일 수정버튼 클릭 이벤트
        $todoList.addEventListener('click', e => {
            if(!e.target.matches('.modify span')) return;
            console.log('수정 버튼이 클릭됨!');
            
           
            console.log(e.target.parentNode.parentNode);
            newTitleToDoData(e.target.parentNode.parentNode);

        });
})();
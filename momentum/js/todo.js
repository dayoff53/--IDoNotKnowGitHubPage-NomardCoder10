const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    //localStorage 안에 입력값(todos)을 넣는다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    li = event.target.parentElement;
    // toDos의 item의 id가 li의 id가 다를경우 true (id 동일한것만 삭제된 array가 됨)
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //삭제될 li의 item을 삭제
    li.remove();
    //삭제된 array를 브라우저에 다시 저장함
    saveToDos();
}

//list-item을 추가해 줄 함수
function paintToDo(newTodo){
    //createElement는 Element를 생성하는 함수 이 경우 toDo-List에 추가됨
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    //appendChild는 자식을 생성하는 함수 이 경우 li가 span을 자식으로 가짐
    li.appendChild(span);
    li.appendChild(button);
    console.log(li);
    toDoList.appendChild(li);
}

//submit이 일어나지 않도록 방지
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    //array에 넣을 값을 가져온다.
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)



//브라우저가 저장중인 todos값
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



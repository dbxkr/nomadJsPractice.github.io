const toDoList = document.querySelector("#to-do-list");
const toDoInput = document.querySelector("#to-do-list input");
const SAVED_LIST = "toDos"

const saves = localStorage.getItem(SAVED_LIST);
let toDos = [];

function loadList(){
    const load = JSON.parse(saves);
    if(saves){
        toDos = load;
        toDos.forEach(addToDo);
    }
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id != li.id);
    localStorage.setItem(SAVED_LIST, JSON.stringify(toDos));
}

function addToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.addEventListener("click", deleteTodo);
    span.innerText = newTodo.text;
    button.innerText = "x";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleSubmit(info){
    info.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""
    const obj = {text:newTodo, id:Date.now(),};
    toDos.push(obj);
    addToDo(obj);
    localStorage.setItem(SAVED_LIST, JSON.stringify(toDos));
}

////////
loadList();
toDoList.addEventListener("submit", handleSubmit);
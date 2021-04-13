// Vars
const inputTodo = document.querySelector('.todo-input'); 
const containerList = document.querySelector('.todo-container')
const listTodo = document.querySelector('.todo-list');
const buttonTodo = document.querySelector('.todo-button');
const filterTodo = document.querySelector('.todo-filter');
const form = document.querySelectorAll('form');


// Events
buttonTodo.addEventListener('click', addTodo);
listTodo.addEventListener('click', checkRemoveTodo);
filterTodo.addEventListener('click', todoFilter);

// Functions
function addTodo(event){
  event.preventDefault();

  let divTodo = document.createElement('div');
  divTodo.classList.add('todo');
  
  let newTodo = document.createElement('li');
  newTodo.classList.add('todo-item');
  newTodo.innerHTML = inputTodo.value;
  divTodo.appendChild(newTodo);

  let confirmButton = document.createElement('button');
  confirmButton.innerHTML = '<i class="fas fa-check-circle"> <i>';
  confirmButton.classList.add('confirm-btn');
  divTodo.appendChild(confirmButton);

  let trash = document.createElement('button');
  trash.innerHTML = '<i class="fas fa-trash"> <i>';
  trash.classList.add('trash-btn');
  divTodo.appendChild(trash);

  listTodo.appendChild(divTodo);
  
  inputTodo.value = "";

}

function checkRemoveTodo(event) {
  const item = event.target;
  const todo = item.parentElement;
  
  if( item.classList[0] == 'trash-btn' ) {
    todo.classList.toggle('remove')
    todo.addEventListener('transitionend', () => todo.remove())
  }
  else if ( item.classList[0] == 'confirm-btn' ) {
    todo.classList.toggle('confirmed');
  }
}

function todoFilter(event) {
  const todo = listTodo.childNodes;
  todo.forEach(todo => {
    switch(event.target.value) {
      case "all": 
        todo.style.display = "flex";
        break;

        case "completed":
          if ( todo.classList.contains("confirmed") ) {
          todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          } 
          break;

        case "uncompleted":
          if ( !todo.classList.contains("confirmed") ) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          } 
          break;
    }
  })
}
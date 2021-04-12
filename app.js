// Vars
const inputTodo = document.querySelector('.todo-input'); 
const containerList = document.querySelector('.todo-container')
const listTodo = document.querySelector('.todo-list');
const buttonTodo = document.querySelector('.todo-button');
const form = document.querySelectorAll('form');

// Events
buttonTodo.addEventListener('click', addTodo);


// Functions
function addTodo(event){
  let data = inputTodo.value
  event.preventDefault();
  
  // 'li' inside list
  let newTodo = document.createElement('li')
  newTodo.classList.add('todo-item')  
  newTodo.innerHTML = data;
  containerList.appendChild(newTodo);

  let confirm = document.createElement('button')
  confirm.innerHTML = '<i class(fas fa-check-circle)> <i>'
  confirm.classList.add('confirm-btn')
  containerList.appendChild(confirm)
  
  let trash = document.createElement('button')
  trash.innerHTML = '<i class(fas fa-trash)> <i>'
  trash.classList.add('trash-btn')
  containerList.appendChild(trash)
}

var addBtn = document.getElementById('add-btn');
var newTodoInput = document.getElementById('new-todo-input');
var todoList = document.getElementById('todo-list');

var addTodo = function(){
  var newTodoContent = newTodoInput.value;
  var newLI = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newLI.appendChild(newContent);
  todoList.appendChild(newLI);
}





addBtn.addEventListener('click', addTodo);
li[].addEventListener

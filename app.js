

var addBtn = document.querySelector('#add-btn');
var newTodoInput = document.querySelector('#new-todo-input');
var todoList = document.querySelector('#todo-list');
var doneList = document.querySelector('#done');

var addTodo = function(){
  var newTodoContent = newTodoInput.value;
  var newLI = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newLI.appendChild(newContent);
  todoList.appendChild(newLI);

  newTodoInput.value = ''; // clearing the input
}

addBtn.addEventListener('click', addTodo);

todoList.addEventListener('click', function(event) {
  console.log('someone clicked on you or your children');
   console.log(event.target);

  if(event.target.tagName === 'LI'){

    // find out if the text in the LI that the user clicked on
        // create new LI element with the text
    var doneLI = document.createElement('li');
    doneLI.className = 'done';
    var newContent = document.createTextNode(event.target.textContent);
    doneLI.appendChild(newContent);

    //append it to the done list
document.querySelector('#done').appendChild(doneLI);
    //remove the irig LI or the LI that the user clicked on

    todoList.removeChild(event.target);



  //     if (event.target.className !== "done") {
  //   //  event.target.className = 'todo';
  //       var todo = event.target;
  //       doneList.appendChild(todo);
  //
  //     } else if (event.target.className === "done") {
  // // event.target.className = 'todo';
  //       var done = event.target;
  //       todoList.appendChild(done);
  //     }
  }
})

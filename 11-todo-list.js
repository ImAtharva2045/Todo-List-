const todoList = [
];
//j

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
for(let i = 0;i<todoList.length;i++){
  const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;

  const {name,dueDate} = todoObject; 
  const HTML = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
   " class="delete-todo-button">Delete</button>
 
   `;//Generating the HTML and <p> as we have to make it in next line.
   //here we made 3 elements as we want to have , 3 different columns , if 4tgh element will be there then it will wrap around by creating another row 
  todoListHTML += HTML;
}
// console.log(todoListHTML);
document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({
    // name : name,
    // dueDate : dueDate
    name,
    dueDate
  })
  // console.log(todoList);

 inputElement.value = '';
 dateInputElement.value = '';

 renderTodoList();
}

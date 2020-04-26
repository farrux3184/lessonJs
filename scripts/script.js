'use srtict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    todoRemove = document.querySelector ('.todo-remove');

let todoData = JSON.parse(localStorage.getItem('newTodo'));
      if (todoData === null) {
    todoData = [];
      } else {
    todoData = JSON.parse(localStorage.getItem('newTodo'));
}
const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    localStorage.setItem('newTodo', JSON.stringify(todoData));

    todoData.forEach(function(item, i){
const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
    '<div class="todo-buttons">' +
    '<button class="todo-remove"></button>' +
    '<button class="todo-complete"></button>' +
    '</div>';

    if(item.completed) {
    todoCompleted.append(li);
      } else {
    todoList.append(li);
  }
        
const btnTodoComplete = li.querySelector('.todo-complete');
    
    btnTodoComplete.addEventListener('click', function(){
    item.completed = !item.completed;
    render();
  });

const btnTodoRemove = li.querySelector('.todo-remove');
     
    btnTodoRemove.addEventListener('click', function () {
    todoData.splice(i, 1);
    render();
  });
});
    headerInput.value = '';
  };
const showText = function(){
    todoData.textContent = localStorege.data;
};
    todoControl.addEventListener('submit', function(event){
    event.preventDefault();
      if (headerInput.value === ''){
    return;
      } else {
    const newTodo = {
    value: headerInput.value,
    completed: false
        
  };
      
    todoData.push(newTodo);
    localStorage.setItem('newTodo', JSON.stringify(todoData));
    render();
  }     
  });
  render();
    
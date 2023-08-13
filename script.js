const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

addBtn.addEventListener('click', function() {
  if (todoInput.value.trim() !== '') {
    addTodoItem(todoInput.value.trim());
    todoInput.value = '';
  }
});

function addTodoItem(task) {
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const deleteBtn = document.createElement('span');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function() {
    todoItem.remove();
  });

  todoItem.appendChild(checkbox);
  todoItem.appendChild(taskText);
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);
}

const addTodoBox = document.querySelector('.add-todo-box');
const todoForm = addTodoBox.querySelector('#todo-form');
const todoInput = addTodoBox.querySelector('#todo-input');
const todoListBox = document.querySelector('.todo-list-box');
const todoList = todoListBox.querySelector('#list');
const deleteBtn = todoListBox.querySelector('#delete-btn');
const filterNotDoneBtn = document.querySelector('.filter-not-done');
const filterDoneBtn = document.querySelector('.filter-done');
const filterAllBtn = document.querySelector('.filter-all');

// Crea un array para almacenar las tareas
let todos = [];

// Función para agregar una tarea al array y a la lista
function addTodo() {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push(todoText);
    const newTodo = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newTodo.appendChild(checkbox);
    const label = document.createElement('label');
    label.innerText = todoText;
    newTodo.appendChild(label);
    todoList.appendChild(newTodo);
    todoInput.value = '';
  }
}

// Función para eliminar todas las tareas completadas
function deleteDone() {
  const listItems = todoList.querySelectorAll('li');
  listItems.forEach(function(item) {
    if (item.querySelector('input[type="checkbox"]').checked) {
      todoList.removeChild(item);
    }
  });
}

// Agrega un event listener para el formulario de tareas
todoForm.addEventListener('submit', addTodo);

// Agrega un event listener para la lista de tareas
todoList.addEventListener('click', function(event) {
  const clickedItem = event.target;
  if (clickedItem.type === 'checkbox') {
    clickedItem.parentElement.classList.toggle('done');
  }
});

// Agrega un event listener para el botón de eliminar
deleteBtn.addEventListener('click', deleteDone);

// Agrega un estilo CSS para la clase "done"
const style = document.createElement('style');
style.innerHTML = '.done { text-decoration: line-through rgb(36, 176, 188) ;text-decoration-thickness: 3px; color: gray; opacity: 0.5; } li:not(:last-child) { border-bottom: 1px solid #ccc; padding-bottom: 10px; }';
document.head.appendChild(style);



//funcion bonus
function filterTodos(filter) {
	const listItems = todoList.querySelectorAll('li');
	listItems.forEach(function(item) {
	  if (filter === 'done') {
		if (!item.classList.contains('done')) {
		  item.style.display = 'none';
		} else {
		  item.style.display = 'flex';
		}
	  } else if (filter === 'not-done') {
		if (item.classList.contains('done')) {
		  item.style.display = 'none';
		} else {
		  item.style.display = 'flex';
		}
	  } else {
		item.style.display = 'flex';
	  }
	});
  
	// Actualiza el botón activo
	filterAllBtn.classList.remove('active');
	filterDoneBtn.classList.remove('active');
	filterNotDoneBtn.classList.remove('active');
	if (filter === 'done') {
	  filterDoneBtn.classList.add('active');
	} else if (filter === 'not-done') {
	  filterNotDoneBtn.classList.add('active');
	} else {
	  filterAllBtn.classList.add('active');
	}
  }
  
  // Agrega event listeners para los botones de filtro
  filterNotDoneBtn.addEventListener('click', function() {
	filterTodos('not-done');
	filterNotDoneBtn.classList.add('active');
	filterDoneBtn.classList.remove('active');
  });
  
  filterDoneBtn.addEventListener('click', function() {
	filterTodos('done');
	filterDoneBtn.classList.add('active');
	filterNotDoneBtn.classList.remove('active');
  });

  filterAllBtn.addEventListener('click', function() {
	filterTodos('all');
	filterAllBtn.classList.add('active'); // Agregamos esta línea
	filterDoneBtn.classList.remove('active');
});
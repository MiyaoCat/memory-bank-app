var todos = [];
var lastId = 0;

function add(task) {
	const todo = {
		id: `${lastId++}`,
		task,
		completed: false
	};

	todos = [...todos, todo];
};


function remove(id) {
	const filtered = todos.filter( function(todo) { 
		return todo.id != id 
	});

	todos = [...filtered];
};

function complete(id) {
	for (let i = 0; i < todos.length; i++) {
		if ( todos[i].id === id ) {
			todos[i].complete = true;
		}
	}
};


function show(todos) {

};

const $form = document.querySelector('form');
const $input = $form.querySelector('input');

window.addEventListener('click', function(event) {
	console.log(event)
})
var todos = [];
var archiveList = [];
var lastId = 0;

const $form = document.querySelector('form');
const $input = $form.querySelector('input');
const $output = document.querySelector('output');
const $remove = document.querySelector('.remove');
const $complete = document.querySelector('.complete');

function add(task) {
	const todo = {
		id: `${lastId++}`,
		task,
		completed: false
	};

	todos = [...todos, todo];
	renderTodos(todos);
};

function remove(id) {
	let filtered = todos.filter( function(todo) { 
		return todo.id != id 
	});

	todos = [...filtered];
	renderTodos(todos);
};

function complete(id) {
	for (let i = 0; i < todos.length; i++) {
		if ( todos[i].id === id ) {
			todos[i].complete = !todos[i].complete;
		}
	}
	renderTodos(todos);
};

function renderCompleted(todo) {
	if (todo.completed = true) {
		return `
			<li data-id=${todo.id}>
				<div class="todo-card ">
					<h2 class="completed">
						${todo.task}
					</h2>

					<div class="actions">
						<button class="remove">Remove</button>
						<button class="complete">${todo.complete ? "Undo" : "Complete"}</button>
					</div>
				</div>
			</li>
		`;
	}
}

function renderTodo(todo) {
	return `
		<li data-id=${todo.id}>
			<div class="todo-card ">
				<h2 class="${todo.complete ? "completed" : ""}">
					${todo.task}
				</h2>

				<div class="actions">
					<button class="remove">Remove</button>
					<button class="complete">${todo.complete ? "Undo" : "Complete"}</button>
				</div>
			</div>
		</li>
	`;

};

function renderTodos(todos) {
	var template = "<ul>";
	todos.forEach( function(todo) {
		template += renderTodo(todo);
	});
	template += "</ul>";

	$output.innerHTML = template;
};

add("play golf");
add("walk chows");

$form.addEventListener('submit', function(event) {
	event.preventDefault();

	if ($input.value.trim() !== "") {
		add($input.value.trim());

		console.log("todos: ", todos)
	}
		
	$input.value = '';
})

$output.addEventListener('click', function(event) {
	if (event.target.classList == 'remove') {
		const id = event.target.closest('li').dataset.id;
		remove(id);
		archive(id)
	}

	if (event.target.classList == 'complete') {
		const id = event.target.closest('li').dataset.id;
		complete(id);
		
	}
})




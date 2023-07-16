var todos = [];
var archiveList = [];
var lastId = 1;

const $form = document.querySelector('form');
const $input = $form.querySelector('input');
const $output = document.querySelector('output');
const $archive = document.querySelector('archive');
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
	let removedTodo;
	todos = todos.filter(function(todo) {
		if (todo.id === id) {
			removedTodo = todo;
			return false; // Exclude the removed todo from the todos array
		}
		return true;
	});

	renderTodos(todos);
	archive(removedTodo);
	console.log('removed ', removedTodo.task);
}

function archive(todo) {
	archiveList.push(todo);
	renderArchives(todo); 
}

function complete(id) {
	for (let i = 0; i < todos.length; i++) {
		if ( todos[i].id === id ) {
			todos[i].complete = !todos[i].complete;
		}
	}
	renderTodos(todos);
};

function renderTodo(todo) {
	return `
		<li data-id=${todo.id}>
			<div class="todo-card ">
				<h3 class="${todo.complete ? "completed" : ""}">
					${todo.task}
				</h3>

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

function renderArchiveTodos(todo) {
	return `
		<li data-id=${todo.id}>
			<div class="todo-card ">
				<h2 class="${todo.complete ? "completed" : ""}">
					${todo.task}
				</h2>

				<div class="actions">
					<button class="remove">Re-Add</button>
					<button class="complete">${todo.complete ? "Undo" : "Complete"}</button>
				</div>
			</div>
		</li>
	`;
};

function renderArchives(todos) {
	var template = "<ul>";
		archiveList.forEach( function(todo) {
			template += renderArchiveTodos(todo);
		});
		template += "</ul>";

		$archive.innerHTML = template;	
}

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
	}

	if (event.target.classList == 'complete') {
		const id = event.target.closest('li').dataset.id;
		complete(id);
		
	}
})



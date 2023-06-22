const $para = document.createElement('p');
const $script = document.getElementsByTagName('script')[0];
document.body.insertBefore($para, $script);

function print(note = "") {
	console.log( `--------- ${note}`);
	console.log( `todos: '`, todos);
}

const todos = [];
var count = 0;

print();

function add(toDoItem) {
	var todo = {
		id: `a${count++}`,
		content: toDoItem,
	};

	todos.push(todo);
	print(`Added: ${toDoItem}`);
}

function remove(id) {
	print(`Removed: ${todos[id].content}`);
	// todos.splice(id, 1);
	todos[id];
}

function complete(id) {
	todos[id].complete =true;
	print(`Completed: ${todos[id].content}`);
}

function update(idToSearch, updatedItem) {
	//get todo to update
	const found = todos[idToSearch];
	if (found) {
		console.log(`Updated ${found.content} to ${updatedItem}`)
		found.content = updatedItem;
	} else {
		console.log('Item not found')
	}

	// update todo
}

add("make dinner");
add("take shower");
add("do workout");
add("code");

complete(1);

remove(0);

add("go to sleep");

update(2, "go running");
update(55, "run")
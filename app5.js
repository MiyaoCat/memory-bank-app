var lastId = 4;

let toDoList = [
	{
		"id": "a1",
		"task": "Get fitted",
		"completed": false,
	},
	{
		"id": "a2",
		"task": "Run 3 miles",
		"completed": false,
	},
	{
		"id": "a3",
		"task": "make smoothie",
		"completed": false,
	},
];

function print(note = "") {
	console.log(`------- ${note}`);
	console.log(toDoList);
}

function add(task, done) {
	const newTask = {
		"id": `a${lastId++}`,
		"task": task,
		"completed": done,
		"date": new Date(),
	};
	toDoList.push(newTask);

	print(`Added: ${task}`);
}

function findById(idToFind) {
	return toDoList.find( function(currentToDo) {
		return currentToDo.id == idToFind;
	});
}

function remove(idToDelete) {
	const taskToRemove = findById(idToDelete); 

	if (taskToRemove) {
		var newArray = toDoList.filter(function(toDoListItem) {
			return toDoListItem.id !== idToDelete;
		})
		toDoList = newArray;
		print(`Removed: ${taskToRemove}`);
	} else {
		print("Id not found");
	}
	
}

function update(idToUpdate, updatedTask) {
	var taskiD = findById(idToUpdate);
	
	if (taskiD) {
		print(`Updated: ${taskiD.task} to ${updatedTask}`)
		task = updatedTask;
	}else {
		print("Id not found. Cannot update")
	}
}

console.log('foundById: ', findById('a3') );

add("Practice coding", true);
remove('a1');

update("a3", "Make dinner");
update("a11", "eat food");
remove("a20");
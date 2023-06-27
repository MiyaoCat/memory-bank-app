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
		return currentToDo.id === idToFind;
	});
}

function remove(idToDelete) {
	const taskToRemove = findById(idToDelete); 

	if (taskToRemove) {
		//Filter through list
		var newArray = toDoList.filter(function(toDoListItem) {
			//Keep tasks where statement is true; does the item.id == the idToDelete. If yes keep task and add to new list.
			return toDoListItem.id !== idToDelete;
		})
		//Reassign the new list with new array with the item removed
		toDoList = newArray;
		print(`Removed: ${taskToRemove.task}`);
	} else {
		print("Id not found");
	}
	
}

function update(idToUpdate, updatedTask) {
	var taskiD = findById(idToUpdate);
	
	if (taskiD) {
		print(`Updated: ${taskiD.task} to ${updatedTask}`)
		taskiD.task = updatedTask;
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
add("vacuum");
remove("a5")

add("cut hair")
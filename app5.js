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
// function remove(idToDelete) {
// 	const taskToRemove = findById(idToDelete); 
// 	print(`Removed: ${taskToRemove.task}`)
// 	if (taskToRemove) {
// 		var newArray = toDoList.filter(function(currentToDo) {
// 		return currentToDo.id !== idToDelete;
// 		toDoList = newArray;
// 		})

// 	}	
// }
function remove(idToDelete) {
	const taskToRemove = findById(idToDelete); 
	print(`Removed: ${taskToRemove.task}`)
	
	var newArray = toDoList.filter(function(currentToDo) {
		return currentToDo.id !== idToDelete;
	})
	toDoList = newArray;
}

console.log('foundById: ', findById('a1') );

add("Practice coding", true);
remove('a1');




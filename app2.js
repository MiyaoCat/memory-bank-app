// print

// add
// remove
// complete
// update
// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// function print(note == "") {
// 	console.log(`-----${note}`);
// }

function print(note = "") {
	console.log(`- - - ${note} - - -`);
	console.log(toDoList)
}

const toDoList = [];
var count = 0;

function add(listItem) {
	var newItem = {
		id: `a${count++}`,
		content: listItem,
	};

	toDoList.push(newItem);
	print(`Added: ${listItem}`);
}

function remove(id) {
	const removedItem = toDoList[id].content;
	console.log("Removed: " + removedItem);

	toDoList.splice(id, 1);


	print(`Removed: ${removedItem}`)
}

add("Go to Driving Range");
add("Make ramen");
add("Finish Todo App");
remove(2);
add("Shower");

function update(idToFind, updatedItem) {
	const foundItem = toDoList[idToFind];

	if (foundItem) {
		print(`Updated: ${foundItem.content} to ${updatedItem}`)
		foundItem.content = updatedItem;
	} else {
		console.log("Item not found");
	}
}

update(0, "Eat hotdog");












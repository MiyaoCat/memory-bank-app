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
var count = 0;
const id = `a${count++}`;

const todoList = [
	{
		"id": "a1",
		"content": "Brush Teeth"
	},
	{
		"id": "a2",
		"content": "Drink water"
	},
	{
		"id": "a3",
		"content": "Stretch"
	},
];

todoList.forEach(function(todoList) {
	console.log(`${todoList.id} ${todoList.content}`);
})

// var count = "a3";

// //add item to list
// function add(content) {
// 	const newItem = {
// 		"id": id,
// 		"content": content
// 	}
// 	todoList.push(newItem);
// }

// add("a2", "Eat breakfast");
// add("a5", "Read a book");
// forEach(todoList, function(item) {
//   console.log(item);
// });
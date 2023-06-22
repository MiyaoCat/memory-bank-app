// print

// add
// remove
// complete
// update
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
test
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

forEach(todoList, function(item) {
  console.log(item);
});

// forEach(todoList, function(item, index, array) {
//   console.log("Item:", item);
//   console.log("Index:", index);
//   console.log("Array:", array);
//   console.log("-------------------");
// });

var count = "a3";

//add item to list
function add(id, content) {
	const newItem = {
		"id": id,
		"content": content
	}
	todoList.push(newItem);
}

add("a2", "Eat breakfast");

forEach(todoList, function(item) {
  console.log(item);
});
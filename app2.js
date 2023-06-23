
const groceryList = [];
var count = 0;

function print(note = "") {
	console.log(`- - - - ${note}`)
	console.log(`List: `, groceryList);
};

function add(itemToAdd) {
	const newItem = {
		id: `a${count++}`,
		item: itemToAdd,
	}

	groceryList.push(newItem);

	print(`Added: ${itemToAdd}`);
}

function remove(index) {
	print(`Removed: ${groceryList[index].item}`);

	groceryList.splice(index, 1);
}

function update(id, updateItem) {
	const foundItem = groceryList[id];

	if (foundItem) {
		print(`Updated: ${foundItem.item} to ${updateItem}`);

		foundItem.item = updateItem;
	} else {
		print('Item not found')
	}

	
}

add("peas");
add("carrots");
add("bread");
remove(1);
update(0, "butter");
update(11, "butter");

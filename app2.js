
const groceryListApp = {

	groceryList: [],
	customId: 1,

	print: function(note = "") {
		console.log(`- - - - ${note}`)
		console.log(`List: `, this.groceryList);

		const printItems = this.groceryList.map(function(item) {
			return item.item;
		}).join(", ") 
  		console.log(`Items: ${printItems}`);
	},

	findById: function(idToFind) {
		return this.groceryList.find(function(item) {
			return item.id === idToFind;
		})
	},

	add: function(itemToAdd) {
		const newItem = {
			id: `a${this.customId++}`,
			item: itemToAdd,
		}
		this.groceryList = [...this.groceryList, newItem];
		this.print(`Added: ${itemToAdd}`);
	},

	// remove: function(index) {
	// 	const removeItem = this.groceryList[index];

	// 	if (removeItem) {
	// 		this.print(`Removed: ${this.groceryList[index].item}`);

	// 		this.groceryList.splice(index, 1);
	// 	} else {
	// 		this.print('Item not found');
	// 	}
	// },

	remove: function(idToRemove) {
		const removeItem = this.findById(idToRemove);

		if (removeItem) {
			this.groceryList.splice(idToRemove, 1);
			this.print(`Removed: ${removeItem.item}`);
		} else {
			this.print('Item not found');
		}
	},

	update: function(idToUpdate, newItem) {
		const foundItem = this.findById(idToUpdate);

		if (foundItem) {
			this.print(`Updated: ${foundItem.item} to ${newItem}`);

			foundItem.item = newItem;
		} else {
			this.print('Item not found');
		}
	},
}

groceryListApp.add("peas");
groceryListApp.add("carrots");
groceryListApp.add("bread");
groceryListApp.findById("a1");
groceryListApp.update("a2", "oranges");
groceryListApp.remove("a1");












// const groceryList = [];
// var count = 0;

// function print(note = "") {
// 	console.log(`- - - - ${note}`)
// 	console.log(`List: `, groceryList);
// };

// function add(itemToAdd) {
// 	const newItem = {
// 		id: `a${count++}`,
// 		item: itemToAdd,
// 	}

// 	groceryList.push(newItem);

// 	print(`Added: ${itemToAdd}`);
// }

// function remove(index) {
// 	const removeItem = groceryList[index];

// 	if (removeItem) {
// 		print(`Removed: ${groceryList[index].item}`);

// 		groceryList.splice(index, 1);
// 	} else {
// 		print('Item not found');
// 	}
// }

// function update(id, updateItem) {
// 	const foundItem = groceryList[id];

// 	if (foundItem) {
// 		print(`Updated: ${foundItem.item} to ${updateItem}`);

// 		foundItem.item = updateItem;
// 	} else {
// 		print('Item not found');
// 	}
// }



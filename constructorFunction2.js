function GroceryListApp() {

	this.theList = [];
	this.customId = 1;

	this.display = function(note = "") {
		
		console.log(`-- ${note} --`);
		
		const listItems = this.theList.map(function(item) {
			return item.item;
		}).join(", ");
		// console.log(`Items: ${listItems}`);
		console.log("The list: ", this.theList);
	},

	this.findById = function(idToFind) {
		return this.theList.find(function(item) {
			return item.id === idToFind;
			console.log(`found: ${item.id}`)
		})
	},

	this.findByItem = function(itemToFind) {
		return this.theList.find(function(item) {
			return item.item === itemToFind;
			console.log(`found: ${item.item}`)
		})
	},

	this.add = function(item, price) {

		const newItem = {
			"id": `a${this.customId++}`,
			"price": price, 
			"item": item,
			"retreived": false
		}

		this.theList = [...this.theList, newItem];
		this.display(`Added: ${newItem.item}`)
	},

	this.remove = function(itemToRemove) {
		let foundItem = this.findByItem(itemToRemove);

		if(foundItem) {
			let newList = this.theList.filter(function(item) {
				return item.item !== itemToRemove;
			})
			this.theList = newList;
			this.display(`Removed: ${foundItem.item}`);
		} else {
			this.display(`Unable to find ${itemToRemove}`);
		}
	},

	this.update = function(itemToUpdate, updatedItem) {
		let foundItem = this.findByItem(itemToUpdate);

		if(foundItem) {
			this.display(`Updated ${foundItem.item} to ${updatedItem}`);

			foundItem.item = updatedItem;
		} else {
			this.display(`Unable to find ${itemToUpdate}`);
		}
	}
}

const cart = new GroceryListApp();

cart.findById("a1");

cart.add("milk", 5.49)
cart.add("honey", 5.49)
cart.add("sugar", 5.49)
cart.remove("milk")
cart.add("plums", 5.49)
cart.update("sugar", "salt")
cart.remove("spam")
cart.update("silk", "salt")




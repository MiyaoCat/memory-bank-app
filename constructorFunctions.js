function GroceryListApp() {

	this.groceryList = [];
	this.customId = 1;

	this.display = function(note = "") {
		console.log(`-----${note}`);

		const listItems = this.groceryList.map(function(item) {
			return item.item;
		}).join(", ");

		console.log("The Items: ", listItems);
		console.log("The List:", this.groceryList);
	},

	this.findById = function(idToFind) {
		return this.groceryList.find(function(item) {
			return item.id === idToFind;
		})
	},

	this.findByItem = function(itemToFind) {
		return this.groceryList.find(function(item) {
			return item.item === itemToFind;
		})
	},

	this.add = function(item, price) {
		const newItem = {
			"id": `a${this.customId++}`,
			"item": item,
			"retreived": false,
			"price": price
		}

		this.groceryList = [...this.groceryList, newItem];
		this.display(`Added: ${newItem.item}`);
	},

	this.remove = function(idToFind) {
		var foundItem = this.findById(idToFind);

		if (foundItem) {
			var newList = this.groceryList.filter(function (item) {
				return item.id !== idToFind;
			})
			this.groceryList = newList;
			this.display(`Removed: ${foundItem.item}`);
		}
	},

	this.update = function(item, updatedItem) {
		var itemFound = this.findByItem(item);

		if (itemFound) {
			this.display(`Updated: ${itemFound.item} to ${updatedItem}`);

			itemFound.item = updatedItem;
		}
	},

	this.complete = function(item) {
		var itemFound = this.findByItem(item);
		if (itemFound) {
			this.display(`Retrieved: ${itemFound.item}`);

			itemFound.retreived = true;
		}
	}
}

const cart = new GroceryListApp();

cart.add("bacon", "10")
cart.add("bread", "20")
cart.add("butter", "5")

cart.remove("a1");

cart.update("bread", "balogna")

cart.complete("balogna");
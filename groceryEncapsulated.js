const groceryListApp = {

	theList: [],
	idCount: 1,

	display: function (note = "") {
		console.log(`----${note}`);

		const printItems = this.theList.map(function(items) {
			return items.item;
		}).join(", ");
		console.log(`Items: ${printItems}`);
		
		//Returns [object Object]. theList is trying to interpret the object as a string
		// console.log(`The List: ${this.theList}`);
		
		//Two separate arguments. The list object will display
		console.log("The List: ", this.theList);
		
		//stringifies the list
		// console.log(`the list: ${JSON.stringify(this.theList)}`);
	},

	findById: function (idToFind) {
		return this.theList.find(function (item) {
			return item.id === idToFind
		})
	},

	add: function (item) {
		const newItem = {
			"id": `a${this.idCount++}`,
			"item": item
		};

		// this.theList.push(newItem);
		this.theList = [...this.theList, newItem];
		this.display(`Added: ${item}`);
	},

	remove: function (idToRemove) {
		const foundId = this.findById(idToRemove);

		if (foundId) {
			var newList = this.theList.filter(function(item) {
				return item.id !== idToRemove;
			})

			this.theList = newList;
			this.display(`Removed: ${foundId.item}`);
		} else {
			this.display(`ID "${idToRemove}" not found`)
		}
	},

	update: function (id, updatedItem) {
		const foundId = this.findById(id);

		if (foundId) {
			this.display(`Updated: ${foundId.item} to ${updatedItem}`);
			foundId.item = updatedItem;
		} else {
			this.display(`ID "${id}" not found`)
		}	
	}
}

groceryListApp.add("bread");
groceryListApp.add("bacon");
groceryListApp.add("butter");
groceryListApp.add("beans");

groceryListApp.remove("a1");
groceryListApp.remove("a11");

groceryListApp.update("a2", "broccoli");
groceryListApp.remove("ab1");


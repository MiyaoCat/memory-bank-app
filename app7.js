let bookList = [
	{	
		"id": "a1",
		"title": "Henry Sugar and Six More",
		"author": "Roald Dahl",
		"genre": "fantasy",
		"fiction": true
	},
	{	
		"id": "a2",
		"title": "Hotel on the Corner of Bitter & Sweet",
		"author": "Jamie Ford",
		"genre": "historical fiction",
		"fiction": true
	},
	{	
		"id": "a3",
		"title": "Shoe Dog",
		"author": "Phil Knight",
		"genre": "autobiography",
		"fiction": false
	}
]

var lastId = 4;

function print(note = "") {
	console.log(`----${note}`);
	console.log(bookList);
}

function findById(idToFind) {
	return bookList.find(function(book) {
		return book.id == idToFind;
	})
}

function addBook(title, author, genre, fiction) {
	var newBook = {
		"id": `a${lastId++}`,
		"title": title,
		"author": author,
		"genre": genre,
		"fiction": fiction
	}
	bookList.push(newBook);
	print(`Added: ${newBook.title}`)
}

function removeBook(idToRemove) {
	const foundId = findById(idToRemove);

	if (foundId) {
		var newList = bookList.filter(function(bookToRemove) {
			return bookToRemove.id !== idToRemove;		
		})
		bookList = newList;
		print(`Removed: ${foundId.title}`);
	} else {
		console.log(`ID "${idToRemove}" not found`);
	}	
}

function updateBook(id, property, propertyValueToUpdate) {
	const bookToUpdate = findById(id);

	if (bookToUpdate) {
		print(`Updated: ${bookToUpdate[property]} to ${propertyValueToUpdate}`)

		bookToUpdate[property] = propertyValueToUpdate;
	} else {
		console.log(`ID "${id}" not found`);
	}
}

addBook("A Visit from the Goon Squad", "Jennifer Egan", "Pyschological Fiction", true);

console.log("find by Id function test:", findById("a1").title)


removeBook("a2");

updateBook("a1", "title", "Henry Sugar & Six More");

removeBook("a11");












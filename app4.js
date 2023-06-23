const nameList = [];
var count = 0;

function print(note = "") {
	console.log(`------ ${note}`);
	console.log(`Name list: `, nameList);
}
function add(addedName) {

	newName = {
		"id": `a${count++}`,
		"name": addedName,
	}

	nameList.push(newName);

	print(`Added: ${addedName}`);
}

function remove(id) {
	const foundName = nameList[id];

	if (foundName) {
		print(`Removed: ${nameList[id].name}`)
	
		nameList.splice(id, 1);
	}else {
		print('No name found');
	}
}

function update(id, updatedName) {
	const foundId = nameList[id];

	if (foundId) {
		print(`Updated: ${nameList[id].name} to ${updatedName}`)
	
		nameList[id].name = updatedName;
	}else {
		print('No name found');
	}
}

add('hello');
add('mikaela');
add('Marjorie');
remove(0);
remove(10);
update(0, 'Mikayla');
add('Mila');
add('Mackenzie');
update(0, 'Mack')
update(11)
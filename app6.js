let athleteList = [
	{	
		"id": "wa-01",
		"name": "Dejaunte Murray",
		"teams": ["Atlanta Hawks"],
		"college": "University of Washington",
		"high school": "Rainier Beach",
		"retired": false
	},
	{	
		"id": "wa-02",
		"name": "Jamal Crawford",
		"teams": ["Chicago Bulls","New York Knicks", "Atlanta Hawks", "Golden State Warriors", "Brooklyn Nets", "Los Angeles Clippers", "Minnesota Timerwolves", "Phoenix Suns"],
		"college": "University of Michigan",
		"high school": "Rainier Beach",
		"retired": false
	},
	{	
		"id": "wa-03",
		"name": "Isaiah Thomas",
		"teams": [ "Sacramento Kings", "Phoenix Suns", "Boston Celtics", "Cleveland Caveliers", "Denver Nuggets", "Washington Wizards", "New Orleans Pelicans"],
		"college": "University of Washington",
		"high school": "Curtis",
		"retired": true
	}
]

var idStart = 04;

function print(note = "") {
	console.log(`-----${note}`);
	console.log(athleteList);
};

function add(athleteName, teams, college, highSchool, retired) {

	const newPlayer = {
		"id": `wa-0${idStart++}`,
		"name": athleteName,
		"teams": teams,
		"college": college,
		"high school": highSchool,
		"retired": retired
	};
	athleteList.push(newPlayer);

	print(`Added: ${athleteName}`);
}

function findById(idToFind) {
	return athleteList.find(function(athlete) {
		return athlete.id === idToFind;
	});
}

function remove(idToRemove) {
	const playerToRemove = findById(idToRemove);

	if (playerToRemove) {
		var newList = athleteList.filter(function(player) {
			return player.id !== idToRemove;
		})
		athleteList = newList;
		print(`Removed: ${playerToRemove.name}`);
	} else {
		print(`ID "${idToRemove}" not found`);
	}
}

function updatePlayer(id, propertyToUpdate, valueToUpdate) {
	const playerToUpdate = findById(id); 

	if (playerToUpdate) {
		print(`Updated ${playerToUpdate[propertyToUpdate]} to ${valueToUpdate}`)
		return playerToUpdate[propertyToUpdate] = valueToUpdate;
	} else {
		print(`ID "${idToRemove}" not found`);
	}
}

add("Zach Levine", ["Minnesota Timerbwolves", "Chicago Bulls"], "UCLA", "Bothell", false);

remove('wa-01');

// console.log("Found by ID: ", findById("wa-03"));

remove('ca-1');

// updatePlayer("wa-02", "college", "Univ. of Mich")

// updatePlayer("wa-03", "college", "UW")

updatePlayer("wa-03", "name", "Zeke Thomas")





//Update Functions to update specific properties
// function updateTeam(id, updatedTeam) {
// 	const playerToUpdate = findById(id); 

// 	if (playerToUpdate) {
// 		print(`Updated teams`)
// 		playerToUpdate.teams = updatedTeam;
// 	}
// }

// function updateName(id, updatedName) {
// 	const playerToUpdate = findById(id); 

// 	if (playerToUpdate) {
// 		print(`Updated ${playerToUpdate.name} to ${updatedName}`)
// 		playerToUpdate.name = updatedName;
// 	}
// }


























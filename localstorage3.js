const data = localStorage;
data.clear();

function setData(key, value) {
	data.setItem(key, JSON.stringify(value));
}

setData("colors", ["red", "white", "blue"]);

function getData(key) {
	const value = data.getItem(key);
	return parsedValue = JSON.parse(value);
	// return parsedValue;

	// let items = parsedValue;
	// console.log(parsedValue)
}

// let colors = getData("colors");

// console.log(colors[0])

getData("colors")


setData("michael", {team: "Bulls", number: 23, position: "shooting guard"})
getData("michael")

console.log("Hello")

let michael = getData("michael");
console.log(michael.team)
console.log(michael.position)

setData("player1", {score: 0, level: 0, username: "miyaomix"})

let player = getData("player1");
console.log(player)


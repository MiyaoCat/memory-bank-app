// value is a string.
const data = localStorage;
data.clear();

// const message = `My favorite color is ${color}`;
// document.body.textContent = message;

//typeof used to find the type of a given string (object, string, number, boolean etc)
// - - - - - - - - - - - - - - - - - - - - - - - - - - 
data.setItem("score", "paint")

var count = 0;
count++;

data.setItem('score', JSON.stringify({ score: count, play: 2}) );

const storedCount = data.getItem('score');

console.log(storedCount);
console.log( JSON.parse(storedCount) );

// - - - - - - - - - - - - - - - - - - - - - - - - - - 

data.setItem("player", JSON.stringify({name: "Michael Jordan", team: "Bulls", positon: "Guard"}) )

const player = data.getItem("player");
console.log(player);
console.log( JSON.parse(player) );

// - - - - - - - - - - - - - - - - - - - - - - - - - - 

function setData(key, value) {
	data.setItem(key, JSON.stringify(value) );
}

function getData(key) {
	const value = data.getItem(key);
	return JSON.parse(value);
}

setData("player2", {name: "Jalen Brunson", team: "Knicks", position: "Point Guard"});

let name = getData("player2");
console.log(name.position)

// - - - - - - - - - - - - - - - - - - - - - - - - - - 

function initialize() {
	let startData = getData('score');

	if(startData) {
		console.log("welcome back!");
	} else {
		setData("score", {score: 0, play: 0})
	}
}









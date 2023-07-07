// const data = localStorage;

// data.setItem("greeting", "Hello");

// let greeting = data.getItem("greeting");

// console.log(greeting)

// data.setItem("greetings", ["hello", "hi", "hola"] )

// data.setItem("goodbyes", JSON.stringify(["adios", "cya", "peace"]) ) 

// let goodbyes = data.getItem("goodbyes"); 
// goodbyes = JSON.parse(goodbyes);

// console.log(goodbyes);
// console.log(goodbyes[1]);

const data = localStorage;

function setData(key, value) {
	data.setItem(key, JSON.stringify(value))
};

function getData(key) {
	let readKey = data.getItem(key);
	return JSON.parse(readKey);

	// console.log(parsedKey);
}
setData("todo", ["hit balls", "eat dinner", "hangout"]);

let todo = data.getItem("todo");
todo = JSON.parse(todo);

console.log(todo);
console.log(todo[0]);


setData("mj", {team: "Bulls", number: 23})
let mj = getData("mj")
console.log(mj.number)
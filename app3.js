var memoryList = [
	{	
	"id": "a1",	
		"age": 6,
		"feelings": ["confused", "embarrased", "special", "self-conscious"],
		"people": ["Matt K", "Greg P"],
		"memory": "I was in Kindergarten and Matt, Greg and I were on the playground during recess. We were sitting in a circular tube that connects two raised platforms like a bridge. Matt said, 'Whoever has a flat nose can come over to my house', which was in reference to me. I actually wasn't sure who he was talking about. I think Greg may have confirmed it and then we all agreed I had a flat nose (which I do. I am Asian, but my grandma had a particularly flat nose, which was passed down to my mother and apparently me. This is a memory that happened to stick. I think maybe because it made feel a little self-conscious in the moment, but at the same time I was rewarded for my flat nose. It's not something that's ever bothered me. I've never wanted to change my nose or anything, but I remember it being a funny moment that we all could laugh about."
	},
	{	
		"id": "a2",
		"age": 7,
		"feelings": ["fear", "remorse"],
		"people": ["Brother", "Sister"],
		"memory": "My parents were gone. Likely out to dinner so it was just my brother, who was in 7th or 8th grade, my sister and myself. Michael was in our room taking a nap while my sister and I were seated at the kitchen table watching tv. I was shaking my leg which created a small vibration that apparently could be heard or felt by my brother. He probably yelled at me to stop. I probably heard him, but continued to shake my leg anyway or stopped temporarily, forgot and restarted. I just remember my brother storming out of our room, just down the hall. As soon as he opened the door, my sister and I ran as fast as we could to the other end of the house into the computer room. My sister made it in before me and I had to yell ahead to have her open the door for me and quickly slam it shut before my brother caught me. I was in COMPLETE FEAR. My brother had a hot temper and when it boiled I did not want to be around him."
	}
]

function print() {
	memoryList.forEach(function(memory) {
		console.log(memory.memory);
		console.log("People: ", memory.people);
		console.log(`${memory.feelings[0]}`);
	})
}

print();
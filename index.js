// Code your solutions in this file
function writeCards(array, event) {
	let messages = []
	for (let i = 0; i < array.length; i++) {
		messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
	}
	return messages
}

function countdown(integer) {
	while (integer >= 0) {
		console.log(integer)
		--integer
	}
}
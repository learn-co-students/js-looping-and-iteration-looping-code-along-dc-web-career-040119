// Code your solutions in this file
const writeCards = (names, event) => {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`)
}

const countdown = (n) => {
    while(n>=0) {
        console.log(n);
        n--
    }
}
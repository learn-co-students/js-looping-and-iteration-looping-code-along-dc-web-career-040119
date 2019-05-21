// Code your solutions in this file

const writeCards = (names, occassion) => {
  const cards = []
  for (let i = 0; i < names.length; i += 1) {
    const card = `Thank you, ${names[i]}, for the wonderful ${occassion} gift!`
    cards.push(card)
  }
  return cards
}

const countdown = number => {
  let counter = number
  while (counter >= 0) {
    console.log(counter)
    counter -= 1
  }
}

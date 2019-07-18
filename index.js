// Code your solutions in this file
console.log('Connected')

const names = ['Lisa', 'Kaitlin', 'Jan']


function writeCards() {
  let card = []
  for(const e of names){
    card.push('Thank you, ' + `${e}`  + ', for the wonderful surprise gift!')
  }
  return card
}

function countdown(input) {
  for (let i = input; i >= 0; i--) {
 console.log(i);
  }
}

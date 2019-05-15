// Code your solutions in this file
function writeCards(array, name){
  let new_array = []
  for (let i = 0; i< array.length; i++){
    new_array.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`)
  }
  return new_array
}

function countdown(num){
  for (let i=num; i>=0; i--){
    console.log(i)
  }
}

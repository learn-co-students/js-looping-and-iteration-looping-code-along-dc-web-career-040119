// Code your solutions in this file
function countdown(int){
  for(int; int > -1; int--)
  console.log(int)
}


function writeCards(arr, event){
  let newarr = []
  for(let i = 0; i < arr.length; i++) {
  newarr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
  return newarr
}

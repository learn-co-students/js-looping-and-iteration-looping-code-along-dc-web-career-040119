// Code your solutions in this file


function writeCards(names, event){
let array = []
  for (let i = 0; i < names.length; i++){

     array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return array;
}





function countdown(num){
  while (num > -1 ){
  console.log(num)
  num--
  }
  return num
}




//
// function countdown( countdown ) {
//   while ( countdown > 0 ) {
//     console.log( countdown );
//     countdown -= 1;
//   }
//   console.log( countdown );
// }


let word = prompt('enter a word')

const myArray = []
// while (condition){
// task: whats it is going to do on every iteration
//  what is is going to do after doing the task
// }

while (word !== "ESC") {
    word = prompt('give me a word')
    myArray.push(word)
    console.log(myArray)
  }


//   for (let i = word; i != "esc"; i++) {
//     prompt("give me a word")
    
//   }

// create a countdown from 10 to 0, and when on zero console.log `booooom!!`
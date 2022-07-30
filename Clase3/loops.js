

let limite = parseInt(prompt("Ingrese su numero"))

for (let i = 0; i <limite; i++) {
    console.log("Iteración Nro.", i)
}


const colors = ["blue", "red", "green", "purple", "black", "yellow"];

let text = "";
for (let i = 0; i < colors.length; i++) {
  text += colors[i] + "<br>";
}

let word = prompt('enter a word')

const myArray = []


while (word !== "ESC") {
    word = prompt('give me another word')
    myArray.push(word)
    console.log(myArray)
  }

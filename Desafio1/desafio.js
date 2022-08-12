
let devOption = prompt("What type of developer do you need?");

switch (devOption.toLowerCase()) {
    case "fullstack":
        alert("You are lucky, we've found someone");
        break
    case "frontend":
        alert("You are lucky, we've found someone");
        break   
    case "backend":
        alert("You are lucky, we've found someone");
        break 
    case "python":
        alert("You are lucky, we've found someone");
        break
    default: 
        alert("Sorry, currently not available")
        break                   
}


function estimate() {
    num1 = parseFloat(prompt("How many hours per week do you need a dev for?"))
    num2 = parseFloat(prompt("How much are you willing to pay per hour?"))
    resultEstimate = result(num1, num2)
    console.log("Estimated cost per week:", resultEstimate)
}

function result(num1, num2) {
    return num1 * num2
}

estimate()

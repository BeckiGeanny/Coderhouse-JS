const useremail = prompt("What's your email")
user.email = useremail
console.log(user)

let helpOption = prompt("What type of help do you need?");
switch (helpOption.toLowerCase()) {
    case "organization":
        alert("You are lucky, we've got what you need");
        break
    case "clean-Up":
        alert("You are lucky, we've got what you need");
        break   
    case "processes":
        alert("You are lucky, we've got what you need");
        break 
    case "consultation":
        alert("You are lucky, we've got what you need");
        break
    default: 
        alert("Sorry, try again")
        break                   
}


function estimate() {
    num1 = parseFloat(prompt("How many employees do you have?"))
    num2 = parseFloat(prompt("How many hours do you spent searching for relevant data?"))
    resultEstimate = result(num1, num2)
    console.log("Estimated cost for project:", resultEstimate)
}

function result(num1, num2) {
    return num1 * num2
}

estimate()

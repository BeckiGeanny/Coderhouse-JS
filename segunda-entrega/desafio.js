const buttonContact = document.querySelector(".contact-us")
const emailInputDiv = document.getElementById("contactField")
const emailInputField = document.getElementById("emailInput")
const emailSendBtn = document.getElementById("sendEmailBtn")
const responseToContact = document.getElementById("responseToContact")

buttonContact.addEventListener("click", () => showEmailInput())
emailSendBtn.addEventListener("click", () => storeEmailClick())
emailInputField.addEventListener("keydown", (e) => storeEmail(e))


let showEmailInput = () => {
    emailInputDiv.style.display = "block"
}

let storeEmail = (e) => {
    if (e.key === "Enter") {
        contactEmail = emailInputField.value
        console.log(contactEmail)
        responseToContact.innerText = `Keep an eye on your email: ${contactEmail}`
    }
}

let storeEmailClick = () => {
    contactEmail = emailInputField.value
    localStorage.setItem("email", contactEmail)
    console.log(contactEmail)
    responseToContact.innerText = `Keep an eye on your email: ${contactEmail}`
}

console.log(emailInputField)

if (localStorage.getItem("email")){
   emailInputField.value = localStorage.getItem("email")
}
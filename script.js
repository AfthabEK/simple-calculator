

let numButtons = document.querySelectorAll(".num-pad > .btn")
numButtons = Array.from(numButtons)
const equalButton = numButtons.pop()
const decimalButton = numButtons.pop()

// numButtons.forEach(button => console.log(button.textContent));

let opButtons = document.querySelectorAll(".op-pad > .btn")
opButtons = Array.from(opButtons)

// opButtons.forEach(button => console.log(button.textContent))


function numButtonClicked(buttonText) {
    alert(buttonText)
}

function opButtonClicked(buttonText) {
    alert(buttonText)
}

function equalButtonClicked() {
    alert("=")
}

function decimalButtonClicked() {
    alert(".")
}



numButtons.forEach(button => 
    button.addEventListener("click", ()=> numButtonClicked(button.textContent)))
    // We pass a reference to a function as the second parameter for addEvenListener
    

opButtons.forEach(button => 
    button.addEventListener("click", ()=> opButtonClicked(button.textContent)))

equalButton.addEventListener("click",() => equalButtonClicked(equalButton.textContent))


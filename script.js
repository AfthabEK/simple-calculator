

let numButtons = document.querySelectorAll(".num-pad > .btn")
numButtons = Array.from(numButtons)
const equalButton = numButtons.pop()
const backspaceButton = numButtons.pop()


let opButtons = document.querySelectorAll(".op-pad > .btn")
opButtons = Array.from(opButtons)


const outputConsole = document.querySelector(".output-container")


function evaluateExpression(exp) {

    const terms = exp.split(" ")

    console.log(terms);
    
    // let result = terms.reduce((sum,term) => {
    //     return ['+','-','*','/'].includes(term)? sum:sum+parseInt(term);
    // },0)
/*

    multiply
    writeIndex = 0, readIndex = 0
    if  arr[readindex] is number:
        readindex ++ 
    else if arr[readindex] is *
        arr[writeIndex] * arr[readindex + 1]
    else
        readIndex ++
        writeIndex = readindex
    
*/

    let limit = terms.length
    let writeIndex = 0
    let readIndex = 0;

    while(readIndex < limit) {
        if(terms[readIndex] === '/') {
            terms[writeIndex] = parseFloat(terms[writeIndex]) / parseFloat(terms[readIndex + 1])
            terms[writeIndex].toFixed(5)
            readIndex++;
        }
        else if (['+','-','*'].includes(terms[readIndex])) {
            readIndex++;
            writeIndex = readIndex
        }
        else {
            readIndex++;
        }

    }

    limit = writeIndex
    writeIndex = 0
    readIndex = 0;

    while(readIndex < limit) {
        if(terms[readIndex] === '*') {
            terms[writeIndex] = parseFloat(terms[writeIndex]) * parseFloat(terms[readIndex + 1])
            terms[writeIndex].toFixed(5)
            readIndex++;
        }
        else if (['+','-'].includes(terms[readIndex])) {
            readIndex++;
            writeIndex = readIndex
        }
        else {
            readIndex++;
        }

    }
    
    limit = writeIndex
    writeIndex = 0
    readIndex = 0;

    while(readIndex < limit) {
        if(terms[readIndex] === '+') {
            terms[writeIndex] = parseFloat(terms[writeIndex]) + parseFloat(terms[readIndex + 1])
            terms[writeIndex].toFixed(5)
            readIndex++;
        }
        else if (['-'].includes(terms[readIndex])) {
            readIndex++;
            writeIndex = readIndex
        }
        else {
            readIndex++;
        }
    }
    limit = writeIndex
    writeIndex = 0
    readIndex = 0;

    while(readIndex < limit) {
        if(terms[readIndex] === '-') {
            terms[writeIndex] = parseFloat(terms[writeIndex]) - parseFloat(terms[readIndex + 1])
            terms[writeIndex]
            readIndex++;
        }
        else {
            readIndex++;
        }

    }

    console.log(terms);

    let result = terms[0]
    return result;
}

function numButtonClicked(buttonText) {
    let currentText = outputConsole.textContent;
    currentText += buttonText;
    outputConsole.textContent = currentText;
}

function opButtonClicked(buttonText) {
    
    let currentText = outputConsole.textContent;
    const trimmedText = currentText.trim();
    if(trimmedText == "" || 
        ['+','-','*','/'].includes(trimmedText.trim().charAt(trimmedText.length - 1))
    ) {
        alert("Invalid Expression")
        return
    }

    currentText = currentText + " " + buttonText + " ";
    outputConsole.textContent = currentText;
}

function equalButtonClicked() {
    let currentText = outputConsole.textContent;
    const trimmedText = currentText.trim();
        if(trimmedText == "" || 
        ['+','-','*','/'].includes(trimmedText.trim().charAt(trimmedText.length - 1))
    ) {
        alert("Invalid Expression")
        return
    }

    
    let result  = evaluateExpression(trimmedText)
    outputConsole.textContent = result.toFixed(5)
    
}

function backspaceButtonClicked() {
    let currentText = outputConsole.textContent;
    let trimmedText = currentText.trim();
    trimmedText = trimmedText.substring(0,trimmedText.length -1)
    trimmedText = trimmedText.trim()
    outputConsole.textContent = trimmedText
}



numButtons.forEach(button => 
    button.addEventListener("click", ()=> numButtonClicked(button.textContent)))
    // We pass a reference to a function as the second parameter for addEvenListener
    

opButtons.forEach(button => 
    button.addEventListener("click", ()=> opButtonClicked(button.textContent)))


// // Function reference 1: Used when we have parameters
// equalButton.addEventListener("click",(e) => equalButtonClicked(e.target.textContent))

equalButton.addEventListener("click",equalButtonClicked)

// Function reference 2: Used when we don't have parameters
backspaceButton.addEventListener("click",backspaceButtonClicked)


const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.innerText === "0") {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function calculateResult() {
    try {
        // Evaluate the string as a mathematical expression
        let result = eval(display.innerText);
        
        // Handle long decimals
        if (!Number.isInteger(result)) {
            result = result.toFixed(4);
        }
        
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
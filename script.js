//global variable definitions
const button = document.getElementById('button');

//function for input and simple error handling
function errorCheck() {
    let num;
    do { 
        num = Number(window.prompt('Please enter a positive number.'))
        if (num < 0 || Number.isNaN(num)) {
            continue;}
    
        else if (num === 0) {
            return 1;}

        else {
            return num;}}

    while (true)
    }

function factorial(event) {
    const list = document.getElementById('factorial-results');
    let num = errorCheck();
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    const listItem = document.createElement('li');
    listItem.textContent = `The factorial for ${num} is: ${result}.`;
    list.appendChild(listItem);
    return result;
}
//initial function call
button.addEventListener('click', factorial);





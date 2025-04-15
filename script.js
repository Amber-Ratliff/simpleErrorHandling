//global variable definitions
const button = document.getElementById('button');

//function for input and error handling
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

//append results to the DOM and display
function createList(list, num, result) { 
    const listItems = document.querySelectorAll('li');
    let resultCount = listItems.length + 1;      
    const listItem = document.createElement('li');
    listItem.textContent = `The factorial for ${num} is: ${result}.`;
    list.appendChild(listItem);
    //removes the first list item if there are more than 5 results
    if (resultCount > 5) {
        list.removeChild(list.firstChild)};
    return; 
}
function factorial(event) {
    const list = document.getElementById('factorial-results');
    let num = errorCheck();
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    createList(list, num, result);
    return result;
}
button.addEventListener('click', factorial);





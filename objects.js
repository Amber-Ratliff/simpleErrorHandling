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

function factorial() {
    let num = errorCheck();
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    alert(`The factorial of ${num} is: \n${result}`);
    return result;
}
//initial function call
factorial();





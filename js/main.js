// Create a simple calculator that has two inputs and returns the result
// of +,-,/,* somewhere in the DOM


//allow for two user inputs
//make sure the inputs are numbers
//allow the user to evaluate those inputs with a math operator (+, -, *, /)
//after the user types two numbers and clicks a math operator, store the two numbers in separate variables
//display the result of using the selected math operator to evaluate the two inputted numbers

document.querySelector('button').addEventListener('click', evaluate)

function evaluate() {
    //save each user inputted value in its own variable
    let num1 = document.querySelector('#number1').value
    let num2 = document.querySelector('#number2').value
    //save the user selected operation in a variable
    let operation = document.querySelector('select')
    //save the solution space to a variable, to update more easily
    let solution = document.querySelector('span')
    console.log(operation.value)
    console.log(num1, num2)

    //account for situation where user does not input both values
    if(!num1 || !num2){ 
        solution.innerText = 'Please enter a value in both inputs.'
    }else {
        //make sure inputs get changed from strings to numbers
        num1 = Number(num1)
        num2 = Number(num2)
        //cases for when user does enter a value both inputs
        if(operation.value === 'add') {
            solution.innerText = num1 + num2
        } else if(operation.value === 'subtract') {
            solution.innerText = num1 - num2
        } else if(operation.value === 'multiply') {
            solution.innerText = num1 * num2
        } else {
            solution.innerText = num1 / num2
        }

    }

}

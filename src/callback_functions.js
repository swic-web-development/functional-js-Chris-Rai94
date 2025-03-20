const greeting = function() {
  return 'Hello World'}// variable storing a function

const greet = () => {
  return 'Hello World'}// arrow function doing the same thing as the function above

const hello = () => 'Hello World'// arrow function that was shortened to one line

console.log(greeting())// prints 'Hello World'
console.log(greet())// prints 'Hello World'
console.log(hello())// prints 'Hello World'

function discountHalf(num) {//function that returns half of the number
    return num / 2
  }
function discountNone(num) {//function that returns the number as is
    return num / 1
  }
function orderCost(number, callbackFunction) {//function that returns the order cost when using a callback function
    return callbackFunction(number) 
  }
console.log(orderCost(100, discountHalf))// prints 50
console.log(orderCost(100, discountNone))// prints 100

const numbers = [4, 9, 16, 25]
const sqrtNumbers = []

for (let i = 0; i < numbers.length; i++) {
    sqrtNumbers.push(Math.sqrt(numbers[i]))
}
console.log(sqrtNumbers)// prints [ 2, 3, 4, 5 ]
// The code above can be simplified using the map method
const sqrtNumbers2 = numbers.map(Math.sqrt)
console.log(sqrtNumbers2)// prints [ 2, 3, 4, 5 ]

const listNumbers = numbers.map((number) => `<li>${number}</li>`)// creates a list of numbers
console.log(listNumbers.join('\n'))// prints <li>number</li> four times
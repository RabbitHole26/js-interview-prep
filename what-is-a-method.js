// method is a name of a function inside an object

// * example of function which is not a method

function sayHello(name) {
  console.log(`Hello ${name}`)
}

// call the function to execute the code inside it
sayHello('Nacho')

// * example of a method which is a function nested in an object

const myFunctions = {
  greet: function() {
    console.log(`Hello there`)
  },
  farewell: function() {
    console.log(`Goodbye!`)
  }
}

// call the function greet which is a method of myFunctions object
myFunctions.greet() // return a string 'Hello there'

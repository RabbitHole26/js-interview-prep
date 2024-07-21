// a function nested inside another function
// any funcation always needs to be called to work, regardless if it is a nested function or not

function greet() {
  function sayHello(name) {
    console.log(`Hi there, ${name}`)
  }
  // always call the nested function inside its parent function for it to work
  sayHello('Nacho')
}

// if you don't call the parent function the child function (function nested inside) will never work
greet()

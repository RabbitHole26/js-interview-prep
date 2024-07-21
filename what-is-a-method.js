// method is another way to call a function !

function sayHello(name) {
  console.log(`Hello ${name}`)
}

// sayHello('Nacho')

function greeting() {
  // sayHello is a function nested inside greeting function
  // ! sayHello is a method of greeting function
  sayHello('Nacho')
  // sayGoodbye('Nacho')
}

greeting()

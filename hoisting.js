// GLOBAL SCOPE
// can be accessed everywhere

let globalScope = 'globalScope'

exampleFunction()

function exampleFunction() {
  // FUNCTION or LOCAL SCOPE
  // accessible inside function only
  let functionScope = 'functionScope'
  console.log(functionScope)

  // global scope can be accessed inside function scope
  globalScope = 'elephant'

  if (functionScope === 'functionScope') {
    // BLOCK SCOPE
    // block scope accessible inside block statement only
    let blockScope = 'blockScope'
    functionScope = 'dupa'
    console.log(functionScope)
  }
}



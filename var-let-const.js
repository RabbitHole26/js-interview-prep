// GLOBAL SCOPE
// can be accessed everywhere

let globalScope = 'globalScope'

const exampleFunction = () => {
  // FUNCTION or LOCAL SCOPE
  // accessible inside function only
  let functionScope = 'functionScope'
  console.log(functionScope)

  // global scope can be accessed inside function scope
  globalScope = 'elephant'

  if (functionScope === 'functionScope') {
    // BLOCK SCOPE
    // block scope accessible inside block statement only
    var blockScope = 'blockScope'
    functionScope = 'dupa'
    console.log(functionScope)
  }

  console.log(blockScope)
}

exampleFunction()

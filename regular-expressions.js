const checkString = (string) => {
  const pattern = /^(.2)+$/
  return pattern.test(string)
}

console.log(checkString('m2b2c2'))
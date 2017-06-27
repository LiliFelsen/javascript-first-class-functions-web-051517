function receivesAFunction(callback) {
  return callback()
}

function returnsANamedFunction() {
  return function functionName() {}
}

function returnsAnAnonymousFunction() {
  return () => {}
}

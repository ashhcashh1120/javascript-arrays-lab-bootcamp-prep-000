var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  //appends a kitten to the end of the array
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  //prepends a kitten to the beginning of the kittens array
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  //removes the last kitten from the kittens array
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  //removes the first Kitten from the kittens array
  return kittens.shift()
}
function appendKitten(name){
//appends a kitten to the kitten to the kittens array and returns a new array.
return [...kittens, name]
}
function prependKitten(name){
  //prepends a kitten to the kittens array and returns a new array leaving the
  // kittens array unchanged
  return [name, ...kittens]
}
removeLastKitten(){
  //removes the last kitten in the kittens array and returns a new
//array, leaving the kittens array unchanged
return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  //removes the first kitten from the kittens array and returns a
//new array, leaving the kittens array unchanged
return kittens.slice(1)
}

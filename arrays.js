var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars.unshift("butter fingers")

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, element){
  console.log [array.unshift(element)]

}


var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars.unshift("butter fingers")

function addElementToBeginingOfArray(array, element){
  return [...chocolateBars, (element)]
}
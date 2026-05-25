let array1 = ["aki","java",true,123]//declared an array
array1[5] ="chrome" //adding the data to the array in the index
console.log("Added a new elemnet to the array:" ,array1)
array1.push(false)//adding the value to the end of an array
console.log("The data is :" ,array1)
array1.pop()//removing the last element of array
console.log("The data is :" ,array1)
array1.shift()//to remove the first element of the array
console.log("The data is :" ,array1)
array1.unshift(45)//to add an element to the beggining of the array
console.log("The data is :" ,array1)
console.log("The words that includes:" ,array1.includes('n'))//deisplays boolean based on the result
console.log("The position of:" , array1.indexOf('java')) //provided the index value of the element
console.log("The Array Join:" ,array1.join()) //converts the array into string
console.log("The Reverse Array:",array1.reverse()) //reverse the elements of array
console.log("The Sorted Array:" ,array1.sort()) //sorts the elements in array

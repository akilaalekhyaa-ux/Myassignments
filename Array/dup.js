let dup = [56,78,90,23,90,76,43,56] //declared the array 
for(let i=0; i<dup.length;i++){ //for loop to get the length of the array fromindex value 0
    for(let j=i+1; j<dup.length;j++){ //for loop to get the array value from index value 1
        if(dup[i]===dup[j]){
            console.log(dup[i]) //Printing the repeated or duplicate element of the array
        }
    }
}
    

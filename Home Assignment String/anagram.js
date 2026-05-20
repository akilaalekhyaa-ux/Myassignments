let a = "Hello" //decalred a variable
let b = "world"// declared second varaible for comparison
isAnagram(a,b)//calling the function with arguments
function isAnagram(val1, val2) {//function anagram is described
    let c = a.trim().toLowerCase().split("").sort().toString()//trim to removespaces,converted the varaible to same case, remove spaces and sort the variable, and convert the variable to string
    let d = b.trim().toLowerCase().split("").sort().toString()
    //Condition to check the Anagram logic
    if(c === d) {
        console.log("True")
    } else {
        console.log("False")
    }
        
}

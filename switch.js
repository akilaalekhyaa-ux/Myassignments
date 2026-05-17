let test = "Regression"
testtype(test)
function testtype(test){
switch(test){
    case "smoke":
    console.log("The Smoke Testing is completed")
    break
    case "sanity":
    console.log("The Sanity Testing is completed")
    break
    case "Regression": 
    console.log("The Regression Testing is completed")
    break
    case "Default":
    console.log("The Default Testing is completed")
    break
}
}
let browser="chrome"
browsername(browser)
function browsername(browser){
    if (browser==="chrome"){
        console.log("Chrome Broswer is launched")
}
else 
{console.log("The browser is not chrome")}
}
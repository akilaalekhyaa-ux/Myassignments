let score= 85
testresult(score)
function testresult(score){
    switch(true){
        case score>= 90 && score <= 100:
        console.log("The Grade is A")
        break;
        case score>= 75 && score <= 89:
            console.log("The Grade is B")
            break;
        case score>= 40 && score <= 74:
            console.log("The Grade is C")
            break;
        case score<= 35 && score <= 39:
            console.log("The Grade is D")
            break;
        default:
            console.log("fail")
            break;
    }
}
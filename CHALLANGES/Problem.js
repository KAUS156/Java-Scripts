const a=prompt("Guess Number");
let d=a;
let number=45;
if(number!=d){
    console.log("Try Again");
}
    else if(number!=d ||d>45&&d<50 || d>30&&d<45){
        console.log("You are near to traget number");
    }

    else{
    console.log("You are successfully find number");
    }
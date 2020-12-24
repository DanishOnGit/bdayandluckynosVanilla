var userDob=document.querySelector("#inputtext")
var userLuckyNos=document.querySelector("#inputtexttwo")
var mainBtn=document.querySelector("#clickbtn")
var outputdiv=document.querySelector("#output")

var monthDays=[31,29,31,30,31,30,31,31,30,31,30,31]
var sum=0;


function check(){
    var enteredDob=userDob.value;
    console.log(typeof(enteredDob))
    // console.log(enteredDob.charAt(3))
    console.log(enteredDob)
    var split=enteredDob.split("-")
    console.log(typeof(Number(split[0])))
    var num1=split[0].split("")
    var num2=split[1].split("")
    var num3=split[2].split("")
    // console.log(num1)
    var newarray=num1.concat(num2)
    console.log(newarray)
    var finalarray=newarray.concat(num3)
    console.log(finalarray)
    


    
    
}


mainBtn.addEventListener("click",check)

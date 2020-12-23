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
    for(var i=0;i<split.length;i++){

        console.log(split[i])
    sum=sum+(Number(split[i]))
  
}
console.log(sum)

    
    
}


mainBtn.addEventListener("click",check)

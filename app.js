var userDob=document.querySelector("#inputtext")
var userLuckyNos=document.querySelector("#inputtexttwo")
var mainBtn=document.querySelector("#clickbtn")
var outputdiv=document.querySelector("#output")

var monthDays=[31,29,31,30,31,30,31,31,30,31,30,31]
var sum=0;


function check(){
    var enteredDob=userDob.value;
    
    var split=enteredDob.split("-")
    
    var num1=split[0].split("")
    var num2=split[1].split("")
    var num3=split[2].split("")
    
    var newarray=num1.concat(num2)
    
    var finalarray=newarray.concat(num3)
    
    var luckynos=userLuckyNos.value
    
    for(var i=0;i<finalarray.length;i++){

        sum=sum+(Number(finalarray[i]))

    }
    console.log(sum)
    
    if(sum%luckynos==0){
        outputdiv.innerText="Whatttawowww!! Your DOB is a lucky day!"
    }else{
        outputdiv.innerText="Hmmmm...Your DOB is not your lucky day"
    }
    
    sum=0;

    
}


mainBtn.addEventListener("click",check)

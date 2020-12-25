var userDob=document.querySelector("#inputtext")
var userLuckyNos=document.querySelector("#inputtexttwo")
var mainBtn=document.querySelector("#clickbtn")
var outputdiv=document.querySelector("#output")
var cross=document.querySelector(".fas")
var toggle=document.querySelector(".noticediv")
var policy=document.querySelector(".privacy")
var happyimg=document.querySelector("#happy")
var sadimg=document.querySelector("#sad")

var sum=0;

function check(){
    if(userDob.value=="" || userLuckyNos.value==""){
        alert("Please fill both fields")
    }
    else{
    var enteredDob=userDob.value;
    
    var split=enteredDob.split("-")
    
    var num1=split[0].split("")
    var num2=split[1].split("")
    var num3=split[2].split("")
    
    var newarray=num1.concat(num2)
    
    var finalarray=newarray.concat(num3)
    
    var luckynos=userLuckyNos.value
    if(isNaN(luckynos)){
        
        alert("Please enter a valid number.")
        outputdiv.innerText=""
        happyimg.style.display="none"
        sadimg.style.display="none"
        
    }
    else{
    for(var i=0;i<finalarray.length;i++){

        sum=sum+(Number(finalarray[i]))

    }
    console.log(sum)
    
    if(sum%luckynos==0){
        outputdiv.innerText="Whatttawowww!! Your birthday is a lucky day!"
        happyimg.style.display="block"
        sadimg.style.display="none"
    }else{
        outputdiv.innerText="Hmmmm...Your birthday is not your lucky day!"
        happyimg.style.display="none"
        sadimg.style.display="block"
        
    }

    sum=0;
}}
    
}

mainBtn.addEventListener("click",check)

cross.addEventListener("click",invisible)
function invisible (){
  toggle.style.display="none";
}
policy.addEventListener("click",visible)
function visible(){
    toggle.style.display="flex"
}
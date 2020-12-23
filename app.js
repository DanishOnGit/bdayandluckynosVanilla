var userDob=document.querySelector("#inputtext")
var userLuckyNos=document.querySelector("#inputtexttwo")
var mainBtn=document.querySelector("#clickbtn")
var outputdiv=document.querySelector("#output")

var monthDays=[31,29,31,30,31,30,31,31,30,31,30,31]

function check(){
    var enteredDob=userDob.value;
    var Dob=enteredDob.split("/")
    var date=Dob[0]
    var month=Dob[1]
    var year=Dob[2]
    var luckyNos=userLuckyNos.value

    if(isNaN(date)||isNaN(month)||isNaN(year)||isNaN(luckyNos)){

   
        invalidInput()
        
         
     }
        else if(date<=0||date>31||month<=0||month>12||year<1000||year>9999){
     
         
         invalidInput()
        
     }
     else if(date>monthDays[month-1]){
         
         invalidInput()
     }
        
     else if(!Number.isInteger(Number(date)) || !Number.isInteger(Number(month))||!Number.isInteger(Number(year))||!Number.isInteger(Number(luckyNos))){
     
         
         invalidInput()
         
     }
     else{

    var addDob=Number(date)+Number(month)+Number(year)
    
      
    if(addDob%luckyNos==0){
        outputdiv.innerText="Whatttawowww"
    }else{
        outputdiv.innerText="Hmmm...Your DOB is not completely divisible by your lucky nos!"
    }
}
    
    
}



mainBtn.addEventListener("click",check)
function invalidInput(){
    
    alert("Invalid Input")
    output.innerText=""
    
}
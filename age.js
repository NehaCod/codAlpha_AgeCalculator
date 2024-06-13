function ageCalculator() {
    var userinput = document.getElementById("dob").value;
    var username = document.getElementById("name").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
       alert("**Choose a date please!");  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff); 
   
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.getElementById("msg").innerHTML =  
            username + " your age is: " + age + " years. ";
    }
}



const reset=document.getElementById("reset");

reset.addEventListener("click",() =>{
     var msg= document.getElementById("msg");
     msg.innerHTML=" ";
    
});



















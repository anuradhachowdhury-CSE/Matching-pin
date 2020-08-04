//hiding section
const pinMatch=document.getElementById("pinMatch");
const pinNotMatch=document.getElementById("pinNotMatch");
pinInput=document.getElementById("buttonInput");
   function hidingNotifySection(){
       pinMatch.style.display='none';
       pinNotMatch.style.display='none';
      
   }
window.onload=hidingNotifySection;


//generate pin section
document.getElementById("randomGenerate").addEventListener("click",function(){
    let generateInput=document.getElementById("generateInput");
var randomValue=Math.round(1000+Math.random()*9000);
generateInput.value=randomValue;

})
document.getElementById("generateInput").value = "";

//button section + bonus section


function countButtonInput(num){
    let pinInput=document.getElementById("buttonInput");
    switch(num){
        case 'c':
              pinInput.value="";
              break;
        case '<':
              pinInput.value=pinInput.value.substr(0,pinInput.value.length-1);      
              break;
        default:
        pinInput.value +=num;
        break;

    }
}
document.getElementById("pinInput").value = "";

   // pin Matching

function pinMatching() {
    const pinInputCheck = document.getElementById('generateInput').value;
    const generateInputCheck = document.getElementById('buttonInput').value;

    if (pinInputCheck == generateInputCheck) {
        document.getElementById('pinMatch').style.display = 'block';
        document.getElementById('pinNotMatch').style.display = 'none';
    } else {
        document.getElementById('pinMatch').style.display = 'none';
        document.getElementById('pinNotMatch').style.display = 'block';
    }
}
var maleArray=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleArray=["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getName(){
 var year=document.getElementById("year").value;
 var month=document.getElementById("month").value;
 var date=document.getElementById("date").value;
}



var CC = year.slice(0,2);
var YY = year.slice(1,3);

function calculate(){
  var dayOfTheWeek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7;
  return(Math.floor(dayOfTheWeek))
  alert(dayOfTheWeek)
}

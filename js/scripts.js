
function akanName(){
var maleArray=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleArray=["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]


var year = parseInt(document.getElementById("year").value);
var month = parseInt(document.getElementById("month").value);
var date = parseInt(document.getElementById("date").value);
var cc = parseInt(document.getElementById("year").value.slice(0,2));
var yy = parseInt(document.getElementById("year").value.slice(2,4));

var dayOfTheWeek= Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7);


var gndr = document.getElementsByName("one");
  if(gndr[0].checked == true){
    gender = "male";
  } else if(gndr[1].checked == true ){
      gender = "female";
  } else {
      alert("Select gender")
      }

function validateMonth () {
  if(month<=0 || month > 12) {
    alert("Invalid  Month, Please Try Again")
    return false;
  } else {
    return true;
  }
}

function validateDay(){
  if(date<=0 || date>31){
    alert("Invalid date, Please try again")
    return false;
  } else{
    return true;
  }
}

var validMonth = validateMonth();
var validDay = validateDay();

var bornDay;
    if (dayOfTheWeek == 0 && gender == "female") {
           bornDay = "Sunday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and Your Akan name is "  + femaleArray[0];
           return true;

       } else if (dayOfTheWeek == 0 && gender == "male") {
           bornDay = "Sunday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + maleArray[0];
           return true;

        }


        else if (dayOfTheWeek == 1 && gender == "female") {
           bornDay = "Monday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + femaleArray[1];
           return true;
       } else if (dayOfTheWeek == 1 && gender == "male") {
           bornDay = "Monday";
           adocument.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + maleArray[1];
           return true;


       } else if (dayOfTheWeek == 2 && gender == "female") {
           bornDay = "Tuesday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + femaleArray[2];
           return true;
       } else if (dayOfTheWeek == 2 && gender == "male") {
           bornDay = "Tuesday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + maleArray[2];
           return true;


       } else if (dayOfTheWeek == 3 && gender == "female") {
           bornDay = "Wednesday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + femaleArray[3];
           return true;
       } else if (dayOfTheWeek == 3 && gender == "male") {
           bornDay = "Wednesday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + maleArray[3];
           return true;


       } else if (dayOfTheWeek == 4 && gender == "female") {
           bornDay = "Thursday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + femaleArray[4];
           return true;
       } else if (dayOfTheWeek == 4 && gender == "male") {
           bornDay = "Thursday";
           document.getElementById("output").innerHTML= "You were born on " + bornDay + " and your Akan name is "  + maleArray[4];
           return true;


       } else if (dayOfTheWeek == 5 && gender == "female") {
           bornDay = "Friday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + femaleArray[5];
           return true;
       } else if (dayOfTheWeek == 5 && gender == "male") {
           bornDay = "Friday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + maleArray[5];
           return true;

       } else if (dayOfTheWeek == 6 && gender == "female") {
           bornDay = "Sarturday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + femaleArray[6];
           return true;

       } else if (dayOfTheWeek == 6 && gender == "male") {
           bornDay = "Saturday";
           document.getElementById("output").innerHTML = "You were born on " + bornDay + " and your Akan name is "  + maleArray[6];
           return true;
         }

}

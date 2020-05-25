
var maleArray=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleArray=["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getName(){
 var year = parseInt(document.getElementById("year").value);
 var month = parseInt(document.getElementById("month").value);
 var date = parseInt(document.getElementById("date").value);

}


var CC = parseInt(document.getElementById("year").value.slice(0,2));
var YY = parseInt(document.getElementById("year").value.slice(2,4));

var dayOfTheWeek= math.floor()( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(month+1)/10)) + date ) % 7);


var checkgender = function() {

    var gndr = document.getElementsByName("one");
    if(gndr[0].checked == true){
        gender = "male";
    }else if(gndr[1].checked == true ){
        gender = "female";
    }
    else {
        alert("Input gender")
      }
    }

var bornDay;
    if (dayOfTheWeek == 0 && gender == "female") {
           bornDay = "Sunday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 0 && gender == "male") {
           bornDay = "Sunday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];


       } else if (dayOfTheWeek == 1 && gender == "female") {
           bornDay = "Sunday";
           adocument.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 1 && gender == "male") {
           bornDay = "Sunday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];


       } else if (dayOfTheWeek == 2 && gender == "female") {
           bornDay = "Monday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 2 && gender == "male") {
           bornDay = "Monday";
           adocument.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];


       } else if (dayOfTheWeek == 3 && gender == "female") {
           bornDay = "Tuesday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 3 && gender == "male") {
           bornDay = "Tuesday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];


       } else if (dayOfTheWeek == 4 && gender == "female") {
           bornDay = "Wednesday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 4 && gender == "male") {
           bornDay = "Wednesday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];


       } else if (dayOfTheWeek == 5 && gender == "female") {
           bornDay = "Thursday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 5 && gender == "male") {
           bornDay = "Thursday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];


       } else if (dayOfTheWeek == 6 && gender == "female") {
           bornDay = "Friday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       } else if (dayOfTheWeek == 6 && gender == "male") {
           bornDay = "Friday";
           document.getElementById("output").value = "You were born on" + bornDay + "Your Akan name is "  + femaleArray[0];
       }

var maleArray=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleArray=["AKosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getName(){
 var year = parseInt(document.getElementById("year").value);
 var month = parseInt(document.getElementById("month").value);
 var date = parseInt(document.getElementById("date").value);

}


var cc = parseInt(document.getElementById("year").value.slice(0,2));
var yy = parseInt(document.getElementById("year").value.slice(2,4));

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

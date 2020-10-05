function myFunction() {
  var gender = document.querySelector('input[name= "gender"]:checked').value

  var myStringDate = document.getElementById("dateProvided").value;
  var days = new Array(7);
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";

  var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  var myDate = new Date(myStringDate);
  var daysOfWeek = myDate.getDay();
  var userDate = days[daysOfWeek]
  var maleAkanName = maleAkanNames[daysOfWeek]
  var femaleAkanName = femaleAkanNames[daysOfWeek]

  document.getElementById("message").innerHTML = "You were born on " + days[daysOfWeek] + "!";
  if (gender === "male") {
    document.getElementById("akranName").innerHTML = "Your Akran name is " + maleAkanName;
  } else {
    document.getElementById("akranName").innerHTML = "Your Akran name is " + femaleAkanName;
  }
}

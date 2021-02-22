$(document).ready(function () {


var day, month, year;

$('#submit_button').on('click', function() {
  var date = $('#date-input').val().split("-");
    console.log(date, $('#date-input').val())
  day = date[2];
  month = date[1];
  year = date[0];
  var myAlert = document.getElementById('ssn').value;
  alert('You entered: Last 4 = ' + myAlert + ' ' + 'and Date of Birth = ' +  month + day + year);
});


});

function success() {
    if(document.getElementById("ssn", "dob").value===""){ 
           document.getElementById('submit_button').disabled = true; 
       } else { 
           document.getElementById('submit_button').disabled = false;
       }
   }


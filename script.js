// Users can enter their notes in the text area
// Notes can be saved into local storage
// If Notes are saved in local storage, its still there when the page reloads
// Past area is gray
var currentDay = moment().format('MMMM Do YYYY');
var currentTime = moment().format("HH");
$("#currentDay").text(currentDay);

// For the sections of each time
var timeOfDay = ["09","10","11","12","01","02","03","04","05"];

// Still not working dude
function timeColor() {
    for (var i = 0; i < timeOfDay.length; i++) {
        if (timeOfDay[i] < currentTime) {
            $("." + timeOfDay[i]).addClass("past");
    }
    if (timeOfDay[i] === currentTime) {
        $("." + timeOfDay[i]).addClass("present");
      }
      if (timeOfDay[i] > currentTime) {
        $("." + timeOfDay[i]).addClass("future");
      }
    }
}
timeColor();

// Functions for each of the time
// 9AM Row
$("#button9").on("click", function (){
    var task = $("#Time9").val();
    localStorage.setItem("9:00", task);
});
$("#Time9").val(localStorage.getItem("9:00"));
// 9AM Row
$("#button9").on("click", function (){
    var task = $("#Time9").val();
    localStorage.setItem("9:00", task);
});
$("#Time9").val(localStorage.getItem("9:00"));

// 10AM Row
$("#button10").on("click", function (){
    var task = $("#Time10").val();
    localStorage.setItem("10:00", task);
});
$("#Time10").val(localStorage.getItem("10:00"));

// 11AM Row
$("#button11").on("click", function (){
    var task = $("#Time11").val();
    localStorage.setItem("11:00", task);
});
$("#Time11").val(localStorage.getItem("11:00"));

// 12PM Row
$("#button12").on("click", function (){
    var task = $("#Time12").val();
    localStorage.setItem("12:00", task);
});
$("#Time12").val(localStorage.getItem("12:00"));

// 1PM Row
$("#button1").on("click", function (){
    var task = $("#Time1").val();
    localStorage.setItem("1:00", task);
});
$("#Time1").val(localStorage.getItem("1:00"));

// 2PM Row
$("#button2").on("click", function (){
    var task = $("#Time2").val();
    localStorage.setItem("2:00", task);
});
$("#Time2").val(localStorage.getItem("2:00"));

// 3PM Row
$("#button3").on("click", function (){
    var task = $("#Time3").val();
    localStorage.setItem("3:00", task);
});
$("#Time3").val(localStorage.getItem("3:00"));

// 4PM Row
$("#button4").on("click", function (){
    var task = $("#Time4").val();
    localStorage.setItem("4:00", task);
});
$("#Time4").val(localStorage.getItem("4:00"));

// 5PM Row
$("#button5").on("click", function (){
    var task = $("#Time5").val();
    localStorage.setItem("5:00", task);
});
$("#Time5").val(localStorage.getItem("5:00"));
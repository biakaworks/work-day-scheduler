// Users can enter their notes in the text area
// Notes can be saved into local storage
// If Notes are saved in local storage, its still there when the page reloads

const moment = require("./moment");

// Past area is gray
var currentDay = moment().format('MMMM Do YYYY');
var currentTime = moment().format("HH");
$("#currentday").text(currentDay);

// For the sections of each time
var timeOfDay = ["09","10","11","12","01","02","03","04","05"];

function timeColor() {
    for (var i = 0; i < timeofDay.length; i++) {
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
$("#Time9").on("click", function (){
    var task = $("#Time9").val();
    console.log(task);
    localStorage.setItem("9:00", task);
});
$("#Row10").val(localStorage.getItem("9:00"));
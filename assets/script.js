// creating variable that contains moment() 
// moment() displays the date and formatting it as the following
var todayDate = moment().format('dddd, MMM Do YYYY');
// selecting the id 'currentDay' and inserting 'todayDate' inside of that area of the page right underneath 'A simple calendar app text'
$("#currentDay").html(todayDate);

//whatever written inside the $(document).ready will run once the page DOM is ready for JS code
$(document).ready(function() {


    // Added a addListener event for the click of the buttons
    $(".saveBtn").on("click", function() {

      //selecting all siblings of 'this' object that has the name 'description' and returns value of all matched elements
      //(this) - referring to the object where the function is being run, in this case it is referring to 'saveBtn'
      var text = $(this).siblings(".description").val();
      
      //selecting all ids of the parents that contains the 'saveBtn' elements and assigning that to this variable
      var time = $(this).parent().attr("id");

      //setting item 'time' as text
      localStorage.setItem(time,text);
    })

      //Get current number of hours
      function timeTracker() {

        // moment() - displays date/time
        // hour() - communicates w/ CPU clock returns current hour as value from 0-23
        var currentTime = moment().hours();
        console.log("hours is: ", currentTime);

// This will loop over time-blocks 
//.each() - specifies function that runs for every matched element
//.each() syntax = $("selector").each(function(index, element)
$(".time-block").each(function() {

  // parseInt() - converts ids of "time-block" first argument to a string, parses it then returns an integer or NaN
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

  //Checks the Time and add the appropriate classes and applies background colors
  //(this) refers to "time-block" class
  if (blockTime < currentTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (blockTime === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("pasat");
    $(this).addClass("future");
  }

})

}
// .description is the class name of the textarea
// this will save the information that is being inputted into the textarea in #hour9-17 ids
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


timeTracker();

})


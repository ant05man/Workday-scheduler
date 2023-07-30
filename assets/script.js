// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//whatever written inside the $(document).ready will run once the page DOM is ready for JS code
$(document).ready(function() {


    // TODO: Add a listener for click events on the save button. This code should
    $(".saveBtn").on("click", function() {

      var text = $(this).siblings(".description").val();
      
      var time = $(this).parent().attr("id");

      localStorage.setItem(time,text);
    })
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


      //Get current number of hours
      function timeTracker() {
        // moment() - helps manipulate, displaying date/time
        // hour() - communicates w/ CPU clock returns current hour as value from 0-23
        var currentTime = moment().hours();
        console.log("hours is: ", currentTime);
// This will loop over time-blocks 
$(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

  //Checks the Time and add the appropriate classes and applies background colors
  if (blockTime < currentTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (blockTime === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).removeClass("past");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("pasat");
    $(this).addClass("future");
  }

})

}

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour14 .description").val(localStorage.getItem("hour14"));


timeTracker();

})


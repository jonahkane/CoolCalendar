// establishing some variables that we will need to call
let currentDate = dayjs();
// replacing the place holder text in html file with actal day/date information 
$('#currentDay').text(currentDate.format('dddd, MMMM DD, YYYY'));
let currentTime = dayjs();
// here i am calling for the time, and it is being populated in the html where the place holder text was,
// but that filed has the class of hidden on it, so the user does not see that current time displayed.  it is
// only used to help determine which class to apply, past prsent or future
$('#currentTime').text(currentTime.format('h:mm a'))
let currentHour = dayjs().hour();
 

// telling the java script to wait until the entitre page loads before starting
$(document).ready(function () {
  // clear button used to remove all data previously populated into the calendar app - removes from local storage

  $("#clearAll").on("click", function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  // save button takes text that was put into the calendar and saves it to local storage to be called upon later in this code

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    
      localStorage.setItem(time, text);
  })
  
  function scheduler() {
// here we are pulling just the number of the hour in order to compare to the hour on the calendar
    let timeNow = dayjs().hour();
    
    $(".time-block").each(function () {
// i struggled with this part for a long time and ended up needing a tutor's help to correct this.
// i knew i needed to pull just the number from the block of time on the calendar, but i was going about it the wrong way
// after meeting with a tutor, i realized i needed to split the array that is returned at the hyphen, and then take the what was in the first position (or [0] in the arrary)
// and then compare that to the "timeNow" hour
      let blockTime = parseInt($(this).attr("id").split("-")[0]);
// used a console log to determine exactly what was produced from previous line of code
      console.log($(this).attr("id").split("-"));
      // here wer are using an if statement to compare the current hour vs the hour in which the user is 
      // typing their data and then adding or removing the appropriate classes based on the findings.  this will color coordinate the page as per requirements

      if (blockTime < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
            
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

// this final bit of code is taking the local storage information and displaying it within our page
// additional fields were left in to demonstrate functionality for when i was workingo nthis 
// assignment after standard business hours
$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("11-hour .description").val(localStorage.getItem("11-hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#13-hour .description").val(localStorage.getItem("13-hour"));
$("#14-hour .description").val(localStorage.getItem("14-hour"));
$("#15-hour .description").val(localStorage.getItem("15-hour"));
$("#16-hour .description").val(localStorage.getItem("16-hour"));
$("#17-hour .description").val(localStorage.getItem("17-hour"));
$("#18-hour .description").val(localStorage.getItem("18-hour"));
$("#19-hour .description").val(localStorage.getItem("19-hour"));
$("#20-hour .description").val(localStorage.getItem("20-hour"));

scheduler();
})


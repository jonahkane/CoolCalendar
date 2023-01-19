let currentDate = dayjs();
$('#currentDay').text(currentDate.format('dddd, MMMM DD, YYYY'));
let currentTime = dayjs();
$('#currentTime').text(currentTime.format('h:mm a'))
let currentHour = dayjs().hour();
 


$(document).ready(function () {
  $("#clearAll").on("click", function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    
      localStorage.setItem(time, text);
  })
  function timeTracker() {

    let timeNow = dayjs().hour();
    
    $(".time-block").each(function () {
      let blockTime = parseInt($(this).attr("id").split("-")[0]);
console.log($(this).attr("id").split("-"));
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

$("#9-hour .description").val(localStorage.getItem("9-hour"));
$("#10-hour .description").val(localStorage.getItem("10-hour"));
$("11-hour .description").val(localStorage.getItem("11--hour"));
$("#12-hour .description").val(localStorage.getItem("12-hour"));
$("#13-hour .description").val(localStorage.getItem("13-hour"));
$("#14-hour .description").val(localStorage.getItem("14-hour"));
$("#15-hour .description").val(localStorage.getItem("15-hour"));
$("#16-hour .description").val(localStorage.getItem("16-hour"));
$("#17-hour .description").val(localStorage.getItem("17-hour"));
$("#18-hour .description").val(localStorage.getItem("18-hour"));
$("#19-hour .description").val(localStorage.getItem("19-hour"));

timeTracker();
})


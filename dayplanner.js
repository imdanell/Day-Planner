//Local storage + connects to save button
$(".saveBtn").on("click", function(){
  var time=$(this).parent().attr("id")
  console.log (time)
  var value =$(this).siblings(".description").val()
  console.log (value)
  localStorage.setItem(time, value)
})

//Time and date at top of page from moment.js

 var currentDay=moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDay);


//Time block color changing function, 

  function changeColor(){
    var currentHour=moment().hours() 
    $(".time-block").each(function(){
var calendarHour=parseInt($(this).attr("id"))
if (calendarHour < currentHour){
$(this).addClass("past")

}
else if (calendarHour===currentHour){
  $(this).removeClass("past")
  $(this).addClass("present")

}
else {
  $(this).removeClass("past")
  $(this).removeClass("present")
  $(this).addClass("future")
}


    })

  }

changeColor ()

//Local storage for each hour so text stays in assigned hour slot

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
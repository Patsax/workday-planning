var now = moment();
var currentTime = now.hour();
var timeBlock = $(".time-block");
var describe = $(".description");

var displayToday = function() {
    today = moment(now).format("dddd, MMMM Do");
    document.getElementById("currentDay").innerHTML = today;
};

setInterval(displayToday, 1000);

var whatTime = function() {
    // figure what time it is
    timeBlock.each(function() {
        // get time-blocks from index file
        var id = parseInt($(this).attr("id"));
        var task = JSON.parse(localStorage.getItem(id));
        if (task != "null") {
            $(this).find(describe).val(task);
        };
        if (id === currentTime) {
            $(this).addClass("present");
        } else if (id < currentTime) {
            $(this).addClass("past")
        } else {
            $(this).addClass("future")
        };
    });
    // figure which time-blocks are <, >, or = using for loop
    // then dynamically display the corrisponding color for the given class (past, present, or future)
};



whatTime();

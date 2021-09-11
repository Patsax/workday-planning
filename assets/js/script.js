var now = moment();
var currentTime = now.hour();
var timeBlock = $(".time-block");
var describe = $(".description");
var saveBtn = $(".saveBtn")

var displayToday = function() {
    today = moment(now).format("dddd, MMMM Do");
    document.getElementById("currentDay").innerHTML = today;
};

setInterval(displayToday, 1000);

// pulls event information from local storage as well as coloring timeblocks to indicate past, present, or future
var whatTime = function() {
    // figure what time it is
    timeBlock.each(function() {
        // get time-blocks from index file
        var id = parseInt($(this).attr("id"));
        // pulls info from localStorage
        var task = localStorage.getItem(id);
        if (task != "null") {
            $(this).find(describe).val(task);
        };
        // iterates to determine coloring
        if (id === currentTime) {
            $(this).addClass("present");
        } else if (id < currentTime) {
            $(this).addClass("past")
        } else {
            $(this).addClass("future")
        };
    });
};

// function to save tasks/events on button click
saveBtn.on("click", function() {
    // defines storage key
    var hour = $(this).parent().attr("id");
    // defines data to be stored
    var task = $(this).siblings().eq(1).val();
    // sets data to localStorage
    localStorage.setItem(hour, task);
});

whatTime();

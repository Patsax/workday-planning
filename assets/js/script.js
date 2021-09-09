const dateFormat = "dddd, MMMM Do"
var now = moment();

var displayToday = function() {
    today = moment(now).format(dateFormat);
    document.getElementById("currentDay").innerHTML = today;
};

displayToday();
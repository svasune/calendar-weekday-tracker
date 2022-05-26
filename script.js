const dayDate = new Date();


var caption = document.getElementById('caption');

if (dayDate.getDay() === 1) {
    document.getElementById("weekday").innerHTML = 'Monday';
    caption.innerText = "Monday morning blues!";
} else if (dayDate.getDay() === 2) {
    document.getElementById("weekday").innerHTML = 'Tuesday';
    caption.innerText = "Taco Time!";
} else if (dayDate.getDay() === 3) {
    document.getElementById("weekday").innerHTML = 'Wednesday';
    caption.innerText = "Two more days to the weekend.";
} else if (dayDate.getDay() === 4) {
    document.getElementById("weekday").innerHTML = 'Thursday';
    caption.innerText = "The weekend is almost here...";

} else if (dayDate.getDay() === 5) {
    document.getElementById("weekday").innerHTML = 'Friday';
    caption.innerText = "Weekend is here!";
} else if (dayDate.getDay() === 6) {
    document.getElementById("weekday").innerHTML = 'Saturday';
    caption.innerText = "Time to party!";
} else if (dayDate.getDay() === 0) {
    document.getElementById("weekday").innerHTML = 'Sunday';
    caption.innerText = "Time to chillax!";
} else {
    caption.innerText = "Whats happenning?!??";
}

// document.getElementById("time").innerHTML = dayDate;
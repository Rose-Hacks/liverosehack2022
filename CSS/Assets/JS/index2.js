






//switch for day/night theme
var background = document.getElementsByTagName("body")[0];

var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 19) {
        // day theme
        background.classList.remove("nightGradientBackground");
        background.classList.add("dayGradientBackground");
    }
    else {
        // night theme

        background.classList.remove("dayGradientBackground");
        background.classList.add("nightGradientBackground");
    }
}

//countdown timer
var countDownDate = new Date("Jan 17, 2021 12:00:00").getTime();
// Update every second
var x = setInterval(function() {
    var now = new Date().getTime();
        
    var distance = countDownDate - now;
        
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // document.getElementById("dayTimer").innerHTML = "**";
    document.getElementById("dayTimer").style.opacity = "1";
    // document.getElementById("hourTimer").innerHTML = "**";
    document.getElementById("hourTimer").style.opacity = "1";
    // document.getElementById("minTimer").innerHTML = "**";
    document.getElementById("minTimer").style.opacity = "1";
    // document.getElementById("secTimer").innerHTML = "**";
    document.getElementById("secTimer").style.opacity = "1";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("dayTimer").innerHTML = "00";
        document.getElementById("hourTimer").innerHTML = "00";
        document.getElementById("minTimer").innerHTML = "00";
        document.getElementById("secTimer").innerHTML = "00";
    }
    else {
        if (days < 10) {
            document.getElementById("dayTimer").innerHTML = "0" + days;
        }
        else {
            document.getElementById("dayTimer").innerHTML = days;
        }
        if (hours < 10) {
            document.getElementById("hourTimer").innerHTML = "0" + hours;
        }
        else {
            document.getElementById("hourTimer").innerHTML = hours;
        }
        if (minutes < 10) {
            document.getElementById("minTimer").innerHTML = "0" + minutes;
        }
        else {
            document.getElementById("minTimer").innerHTML = minutes;
        }
        if (seconds < 10) {
            document.getElementById("secTimer").innerHTML = "0" + seconds;
        }
        else {
            document.getElementById("secTimer").innerHTML = seconds;
        }
    }
}, 1000);

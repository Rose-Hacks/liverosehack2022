var background = document.getElementsByTagName("body")[0];
// temporary, until hero animation is done 
var title = document.getElementById("title");
var animation = document.getElementById("animation"); 
background.classList.add("animationDayBackground");
// var socialMedia = document.getElementById("socialMedia");
// var quickIcon = document.getElementById("quickIcon");

// switches btn day/night theme based on time
// var currentTime = new Date().getHours();
// if (document.body) {
//     if (7 <= currentTime && currentTime < 24) {
//         // day theme
//         $(".objectsDay").show();
//         $(".objectsNight").hide();
       
//         background.classList.remove("animationNightBackground");
//         background.classList.add("animationDayBackground");

//         quickIcon.classList.remove("titleMatchNightBackground");
//         quickIcon.classList.add("titleMatchDayBackground");
//     }
//     else {
//         // night theme
//         $(".objectsDay").hide();
//         $(".objectsNight").show();

//         background.classList.remove("animationDayBackground");
//         background.classList.add("animationNightBackground");
        
//         quickIcon.classList.remove("quMatchDayBackground");
//         quickIcon.classList.add("titleMatchNightBackground");

//     }
// }


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
        
    // document.getElementById("hourTimer").innerHTML = "**";
    document.getElementById("hourTimer").style.opacity = "1";
    // document.getElementById("minTimer").innerHTML = "**";
    document.getElementById("minTimer").style.opacity = "1";
    // document.getElementById("secTimer").innerHTML = "**";
    document.getElementById("secTimer").style.opacity = "1";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("hourTimer").innerHTML = "00";
        document.getElementById("minTimer").innerHTML = "00";
        document.getElementById("secTimer").innerHTML = "00";
    }
    else {
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
        if (days >= 1) {
            document.getElementById("hourTimer").innerHTML = "24";
            document.getElementById("minTimer").innerHTML = "0";
            document.getElementById("secTimer").innerHTML = "0";
        }
    }
    
    // document.getElementById("hourTimer").innerHTML = days;
}, 1000);


// allows email to be copyied to clipboard
$(document).ready(function() {
    // $('a[href^=mailto]').addClass('mailto-link');

    var mailto = $('.mailto-link');
    var messageCopy = 'Copy email';
    var messageSuccess = 'Copied';
    
    $('.mailto-message').append(messageCopy);
    
    // Disable default action (opening your email client. yuk.)
    $('a[href^=mailto]').click(function() {
        return false; 
    })
    
    // On click, get href and remove 'mailto:'
    // Store email address in a variable.
    mailto.click(function() {
        var href = $(this).attr('href');
        var email = href.replace('mailto:', '');
        copyToClipboard(email);
        $('.mailto-message').empty().append(messageSuccess);
        setTimeout(function() {
            $('.mailto-message').empty().append(messageCopy);
        }, 2000); 
    });
});

// Copies email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

//alert to chrome if opened in ie
let userAgentString = navigator.userAgent; 
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 || userAgentString.indexOf("rv:") > -1; 
if (IExplorerAgent == true) {
    alert("Warning: Browser not supported. To view this webpage, we recommend that you use the latest version of Chrome, Firefox, or Safari.");
}
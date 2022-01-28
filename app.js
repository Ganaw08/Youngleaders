var countdownDate = new Date("feb 14, 2022 14:01:00").getTime();
var x = setInterval(function(){
    var nowDT = new Date().getTime();
    var distance = countdownDate - nowDT;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000* 60)) / 1000);
    document.querySelector(".days h3").innerHTML = days;
    document.querySelector(".hours h3").innerHTML = hours;
    document.querySelector(".minutes h3").innerHTML = minutes;
    document.querySelector(".seconds h3").innerHTML = seconds;
    if(distance < 0){
        clearInterval(x);
        document.querySelector(".countdown-timer").style.display = 'none';
        document.querySelector(".cs-content h1").innerHTML = 'Welcome';
    }
}, 1000);
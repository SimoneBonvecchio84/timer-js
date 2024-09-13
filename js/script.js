const secondElem = document.getElementById("second");
const minuteElem = document.getElementById("minutes");
const hoursElem = document.getElementById("hours")
const btnStar = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
let crono;
let second = 0;
let minutes = 0;
let hours = 0;

btnStar.addEventListener("click", function() {

     crono = setInterval(function () {
        if (second < 59) {
            second++;
            let secondStr;
            if(second <= 9) {
                secondStr = second.toString();
                secondElem.innerText = "0" + secondStr;
            } else {
                secondStr = second.toString();
                secondElem.innerText = secondStr;
            }
           
        } else if (minutes < 59) {
            second = 0;
            minutes++;
            let minutesStr; 
            if(minutes <=9) {
                minutesStr = minutes.toString();
                minuteElem.innerText = "0" + minutesStr;
            } else {
                minutesStr = minutes.toString();
                minuteElem.innerText = minutesStr;
            }
            
        } else if(hours < 24) {
            minutes = 0;
            hours++;
            let huorsStr;
            if(hours <=9) {
              huorsStr = hours.toString();
              hoursElem.innerText = "0" + huorsStr;
            } else {
                huorsStr = hours.toString();
                hoursElem.innerText = huorsStr
            }
        } else {
            second = 0;
            minutes = 0;
            hours = 0;
        }
    }, 1000);
});


btnStop.addEventListener("click", function(){
    clearInterval(crono);
    second = 0;
    minutes = 0;
    hours = 0;
    secondElem.innerText = "00";
    minuteElem.innerText = "00";
    hoursElem.innerText = "00";
});
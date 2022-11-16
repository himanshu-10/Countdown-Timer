const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');



const newYear = "1 jan 2023";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    
    const totalSecond = (newYearDate - currentDate) /1000;

    const days = Math.floor(totalSecond / 3600 / 24);
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const second = Math.floor(totalSecond) % 60 ;


    // console.log(days,hours,minutes,second);

    daysE1.innerHTML = formatTime(days);
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(second);

    // adding 0 if value is less than 10

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }

}

countdown();
setInterval(countdown,1000);
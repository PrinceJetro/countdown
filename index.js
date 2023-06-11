const daysel = document.getElementById("days");
const hoursel =document.getElementById("hours");
const minsel =document.getElementById("mins");
const secondsel= document.getElementById("seconds");

const blackpanther = "10 Nov 2023";

function countDown(){
    const blackpantherDate =new Date(blackpanther);
    const currentDate = new Date();

    const totalSeconds= (blackpantherDate - currentDate) /1000;

    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins =Math.floor(totalSeconds/60) %60;
    const seconds = Math.floor(totalSeconds)% 60;

    daysel.innerHTML= days;
    hoursel.innerHTML= format(hours);
    minsel.innerHTML= format(mins);
    secondsel.innerHTML= format(seconds);

   
}
function format(time){
    return time < 10 ? (`0${time}` ): time;
}



countDown()

setInterval(countDown,1000)

function setDate(){
    const now = new Date()
    setClockHands(now.getSeconds(), now.getMinutes(), now.getHours());
}

function setClockHands(seconds, minutes, hours){
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand = document.querySelector(".min-hand");
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand = document.querySelector(".hour-hand");
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


setInterval(setDate, 1000);
// Each 1000 miliseconds, setClock()
setInterval(setClock, 1000)

//select the data of the clock hands
const secondsHand = document.querySelector('[data-second-hand]')
const minutesHand = document.querySelector('[data-minute-hand]')
const hoursHand = document.querySelector('[data-hour-hand]')


function setClock() {
    const currentTime = new Date()
    const seconds = currentTime.getSeconds() / 60
    // The hands will slowly rotate
    const minutes = (seconds + currentTime.getMinutes()) / 60
    const hours = (minutes + currentTime.getHours()) / 12

    //setting the rotation of the hands
    setRotation(secondsHand, seconds)
    setRotation(minutesHand, minutes)
    setRotation(hoursHand, hours)
}

function setRotation(element, rotationRatio) {
    // Setting the rotation of the hands on the CSS
    element.style.setProperty('--rotation', rotationRatio * 360) 
}

setClock()
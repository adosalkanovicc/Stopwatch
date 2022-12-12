let time = document.querySelector('.time')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')

let seconds = 0
let interval

const stopwatch = () => {
    let sec = seconds % 60
    let min = Math.floor(seconds / 60)
    let hours = Math.floor(seconds/ 3600)

    if (sec < 10) sec = 0 + `${sec}`
    if (min < 10) min = 0 + `${min}`
    if (hours < 10) hours = 0 + `${hours}`

    time.innerHTML = `${hours}:${min}:${sec}`

    seconds++
}

stopwatch()



const resetStopwatch = () => {
    pauseStopwatch()
    seconds = 0
    time.innerHTML = "00:00:00"
}

const startStopwatch = () => {
    interval = setInterval(stopwatch, 1000)
}

const pauseStopwatch = () => {
    clearInterval(interval)
    interval = null
}
start.addEventListener('click', startStopwatch)
pause.addEventListener('click', pauseStopwatch)
reset.addEventListener('click', resetStopwatch)



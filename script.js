let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");
let remainTime
const getRemainingTime = () => {
    const launchDate = "2022-05-22";
    remainTime = Date.parse(launchDate) - Date.parse(new Date())
    let seconds = Math.floor((remainTime / 1000) % 60);
    let minutes = Math.floor((remainTime / (1000 * 60)) % 60);
    let hours = Math.floor((remainTime / (1000 * 60 * 60)) % 24);
    let days = Math.floor((remainTime / (1000 * 60 * 60 * 24)));
    day.innerText = days;
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
}
const myInterval = setInterval(getRemainingTime, 1000)

if (remainTime <= 0) {
        clearInterval(myInterval)
}

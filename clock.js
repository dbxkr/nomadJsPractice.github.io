const clock = document.querySelector("#clock");

function showTime(){
    const date = new Date();
    clock.innerText = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초`;
}

showTime();
setInterval(showTime, 1000);
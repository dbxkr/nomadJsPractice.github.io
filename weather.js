const API_KEY = "437d32b8d25a6702a508a3d69089036c";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.name == "Gwacheon"){city.innerText = "과천";}
        else if(data.name == "Seoul"){city.innerText = "서울";}
        else{city.innerText = data.name;}
        weather.innerText = `오늘의 날씨는 \n${data.weather[0].description} / 섭씨 ${data.main.temp}도`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
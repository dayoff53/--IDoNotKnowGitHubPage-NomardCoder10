const API_KEY = "270e17466b1e3365d8877d5551bf3679";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json()
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.name, data.weather[0].main} / ${data.main.temp}`;
        console.log(`${data.name, data.weather[0].main} / ${data.main.temp}`)
    }));
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


//브라우저에 좌표를 표시햐줌
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const apiKey = "91a018c1fe1a49e9b46160245231103";
//const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=91a018c1fe1a49e9b46160245231103";
// var weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
const searchButton = document.querySelector("search-button");
const searchbar = document.querySelector("search-bar");
const location = document.querySelector(".location");
const icon = document.querySelector(".icon");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
const date = document.querySelector(".date");

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const city = searchbar.value;
    if (city === "") {
        alert("Please enter a city");
    } else {
        getWeather(city);
    }
});

async function getWeather(city) {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}

function displayWeather(data) {
    location.textContent = `${data.name}, ${data.sys.country}`;
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind: ${data.wind.speed} m/s`;
    temp.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    date.textContent = new Date().toLocaleDateString();
}
async function getWeather(city){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.log(error);
    }
}
function displayWeather(data) {
    location.textContent = `${data.name}, ${data.sys.country}`;
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind: ${data.wind.speed} m/s`;
    temp.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
    date.textContent = new Date().toLocaleDateString();
}

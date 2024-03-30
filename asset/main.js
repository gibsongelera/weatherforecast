const apiKey = "3f4e3e3e67ac403d9fc171608243003";
//const baseURL = "https://api.weatherapi.com.v1${city}&appid=${apiKey}";
const searchButton = document.getElementById("search-button");
const searchbar = document.getElementById("search-bar");
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
    const baseURL = `https://api.weatherapi.com.v1${city}&appid=${apiKey}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}
function displayWeather(data) {
    location.textContent = `${data.location.name}, ${data.location.country}`;
    icon.src = `http://weatherapi.com/img/${data.current.condition.icon}.png`;
    description.textContent = data.current.condition.text;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    wind.textContent = `Wind: ${data.current.wind_kph} kph`;
    temp.textContent = `${Math.round(data.current.temp_c)}°C`;
    date.textContent = new Date().toLocaleDateString();
}
async function getForecast(city) {
    try {
        const baseURL = `https://api.weatherapi.com.v1${city}&appid=${apiKey}`;
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        displayForecast(data);
    } catch (error) {
        console.log(error);
    }
}
function displayWeather(data) {
    location.textContent = `${data.location.name}, ${data.location.country}`;
    icon.src = `http://weatherapi.com/img/${data.current.condition.icon}.png`;
    description.textContent = data.current.condition.text;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    wind.textContent = `Wind: ${data.current.wind_kph} kph`;
    temp.textContent = `${Math.round(data.current.temp_c)}°C`;
    date.textContent = new Date().toLocaleDateString();
}

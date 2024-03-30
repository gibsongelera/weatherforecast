const apiKey = "91a018c1fe1a49e9b46160245231103";

const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");
const locationDiv = document.querySelector(".location");
const iconDiv = document.querySelector(".icon");
const temperatureDiv = document.querySelector(".temperature");
const descriptionDiv = document.querySelector(".description");
const humidityDiv = document.querySelector(".humidity");
const windDiv = document.querySelector(".wind");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchBar.value;
  if (city === "") {
    alert("Please enter a city name");
  } else {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  locationDiv.textContent = data.location.name;
  iconDiv.innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}"/>`;
  temperatureDiv.textContent = `${data.current.temp_c}Â°C / ${data.current.temp_f}Â°F`;
  descriptionDiv.textContent = data.current.condition.text;
  humidityDiv.textContent = `Humidity: ${data.current.humidity}%`;
  windDiv.textContent = `Wind: ${data.current.wind_kph} km/h`;
}
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    const data = await response.json();
    console.log(data); // log the API response data
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  console.log(data); // log the data passed to this function
  locationDiv.textContent = data.location.name;
  iconDiv.innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}"/>`;
  temperatureDiv.textContent = `${data.current.temp_c}Â°C / ${data.current.temp_f}Â°F`;
  descriptionDiv.textContent = data.current.condition.text;
  humidityDiv.textContent = `Humidity: ${data.current.humidity}%`;
  windDiv.textContent = `Wind: ${data.current.wind_kph} km/h`;
}

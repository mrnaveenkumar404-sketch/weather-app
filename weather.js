API_KEY ="c0886adf302e10c62416d5374c4511ab";
API_URL ="https://api.openweathermap.org/data/2.5/weather"

const cityinput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const error = document.getElementById("error");
const weathericon = document.getElementById("weatherIcon");
const cityname = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windspeed = document.getElementById("windSpeed");
const sky = document.getElementById("sky");

searchBtn.addEventListener("click", weather)

async function weather() {
    const city = cityinput.value.trim()

    if (city === "") {
        error.textContent = "Please enter a city name";
        
    }
    try {
       const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
       const response = await fetch(url);
       const data = await response.json();

       console.log(data);

       if(response.status === 404) {
        error.textContent = "City not found";
        return;
       }
       if (response.status === 401) {
        error.textContent = "Invalid API key";
        return;
       }

       cityname.textContent = data.name + ", " + data.sys.country;

       temperature.textContent = data.main.temp + "°C";

       humidity.textContent = "Humidity: " + data.main.humidity + "%";

       wind.textContent = "Wind: " + data.wind.speed + " km/h";

       weathericon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
       
       error.textContent = "";

       sky.textContent = data.weather[0].description;




    }
catch (error) {
    console.log(error);
    error.textContent = "An error occurred while fetching weather data";
}}
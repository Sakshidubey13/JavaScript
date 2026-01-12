const apiKey = "3c1bc004fc8544f97823070974c0b328";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const toggleMode = document.getElementById("toggleMode");
const timeEl = document.getElementById("time");
const dayStatus = document.getElementById("dayStatus");
const feels = document.getElementById("feels");
const max = document.getElementById("max");
const min = document.getElementById("min");

const city = document.getElementById("city");
const dateEl = document.getElementById("date");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");
const icon = document.getElementById("icon");

const forecastBox = document.getElementById("forecast");

const animationContainer = document.createElement("div");
animationContainer.className = "weather-animation";
document.body.appendChild(animationContainer);

// Toggle mode
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Search
searchBtn.addEventListener("click", () => {
  getWeather(cityInput.value);
  getForecast(cityInput.value);
});

function getWeather(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      city.innerText = data.name;
      dateEl.innerText = new Date().toDateString();
      temp.innerText = data.main.temp + "°C";
      desc.innerText = data.weather[0].description;
      humidity.innerText = data.main.humidity;
      wind.innerText = data.wind.speed;
      pressure.innerText = data.main.pressure;

      setIcon(data.weather[0].main);
      changeBackground(data.weather[0].main);
    });
}

function getForecast(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      forecastBox.innerHTML = "";
      for (let i = 0; i < data.list.length; i += 8) {
        const day = data.list[i];
        const div = document.createElement("div");
        div.className = "forecast-card";
        div.innerHTML = `
          <p>${new Date(day.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          })}</p>
          <p>${day.main.temp}°C</p>
          <small>${day.weather[0].main}</small>
        `;
        forecastBox.appendChild(div);
      }
    });
}

function setIcon(weather) {
  if (weather === "Clear") icon.innerText = "☀️";
  else if (weather === "Clouds") icon.innerText = "☁️";
  else if (weather === "Rain") icon.innerText = "🌧";
  else if (weather === "Snow") icon.innerText = "❄️";
  else if (weather === "Thunderstorm") icon.innerText = "⛈";
  else icon.innerText = "🌈";
}

function changeBackground(weather) {
  animationContainer.innerHTML = "";

  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour <= 18;

  if (!isDay) {
    const moon = document.createElement("div");
    moon.className = "moon";
    animationContainer.appendChild(moon);

    for (let i = 0; i < 40; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = Math.random() * window.innerHeight + "px";
      animationContainer.appendChild(star);
    }
  }

  if (weather === "Clear" && isDay) {
    const sun = document.createElement("div");
    sun.className = "sun";
    animationContainer.appendChild(sun);
  }

  if (weather === "Clouds") {
    const cloud = document.createElement("div");
    cloud.className = "cloud";
    animationContainer.appendChild(cloud);
  }

  if (weather === "Rain" || weather === "Thunderstorm") {
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement("div");
      drop.className = "raindrop";
      drop.style.left = Math.random() * window.innerWidth + "px";
      drop.style.animationDuration = 0.5 + Math.random() + "s";
      animationContainer.appendChild(drop);
    }
  }

  if (weather === "Thunderstorm") {
    const flash = document.createElement("div");
    flash.className = "lightning";
    animationContainer.appendChild(flash);
  }

  if (weather === "Snow") {
    for (let i = 0; i < 60; i++) {
      const snow = document.createElement("div");
      snow.className = "snowflake";
      snow.innerText = "❄";
      snow.style.left = Math.random() * window.innerWidth + "px";
      snow.style.animationDuration = 3 + Math.random() * 5 + "s";
      animationContainer.appendChild(snow);
    }
  }
}

//live time function
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  timeEl.innerText = timeString;

  // Morning / Evening / Night
  if (now.getHours() >= 5 && now.getHours() < 12) {
    dayStatus.innerText = "🌅 Morning";
  } else if (now.getHours() >= 12 && now.getHours() < 18) {
    dayStatus.innerText = "🌞 Afternoon";
  } else if (now.getHours() >= 18 && now.getHours() < 21) {
    dayStatus.innerText = "🌇 Evening";
  } else {
    dayStatus.innerText = "🌙 Night";
  }
}

setInterval(updateTime, 1000);
updateTime();

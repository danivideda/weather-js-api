class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.innerHTML = `${weather.weather[0].description}, with ${weather.main.temp} &#8451;`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.innerHTML = `Feels like: ${weather.main.feels_like} &#8451;`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa Sea Level`;
    this.wind.innerHTML = `Wind: ${weather.wind.speed} m/s at ${weather.wind.deg}&deg;`
  }
}
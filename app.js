const weather = new Weather();
const ui = new UI();
// DOM Loaded
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Jakarta', 'Indonesia');

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
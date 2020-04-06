const storage = new Storage();
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();
// DOM Loaded
document.addEventListener('DOMContentLoaded', getWeather);

// Change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  // Get Weather
  getWeather();
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    // Close the modal
  $('#locModal').modal('hide');
  })
  .catch(err => {
    console.log(err);
    alert('Can\'t find such city or state name. Please check your input and try again');
    localStorage.clear();
  });
}
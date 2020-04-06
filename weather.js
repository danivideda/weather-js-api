class Weather {
  constructor(city, state) {
    this.apiKey = '8411135fefce9043df0c28f9897c0ff4';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather(city = this.city, state = this.state) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
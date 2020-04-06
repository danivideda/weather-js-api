class Weather {
  constructor(city='Semarang', state='ID') {
    this.apiKey = '8411135fefce9043df0c28f9897c0ff4';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
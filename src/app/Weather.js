class Weather {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.api_key = '8b779ab723bd5b183a1eba1bc5bfd61f';
    }
    async fetchWeather() {
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api_key}&units=metric`;
        let response = await fetch(URL);
        let data = await response.json();
        return data;
    }
}

export default Weather;
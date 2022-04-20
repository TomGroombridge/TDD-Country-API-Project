const axios = require("axios");

module.exports = class CountryApi {
  constructor() {
    this.url = "https://restcountries.com/v2";
  }
  async fetchAll() {
    try {
      const result = await axios.get(`${this.url}/all`);
      return result;
    } catch (error) {
      return [];
    }
  }

  async fetchCountries(name) {
    try {
      const result = await axios.get(`${this.url}/name/${name}`);
      return result;
    } catch (error) {
      return [];
    }
  }

  async allCountriesFormatted() {
    try {
      const result = await axios.get(
        `${this.url}/all?fields=name,population,region,flag,capital`
      );
      return result;
    } catch (error) {
      return [];
    }
  }
};

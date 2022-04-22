const allCountryData = [
  {
    name: "Afhanistan",
  },
  {
    name: "Åland Islands",
  },
];

const unitedCountryData = [
  {
    name: "United States Minor Outlying Islands",
  },
  {
    name: "United Arab Emirates",
  },
  {
    name: "United States of America",
  },
];

const networkError = new Error("Network Error");

const apiResponseData = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    independent: false,
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    region: "Europe",
    population: 28875,
    flag: "https://flagcdn.com/ax.svg",
    independent: false,
  },
  {
    name: "Albania",
    capital: "Tirana",
    region: "Europe",
    population: 2837743,
    flag: "https://flagcdn.com/al.svg",
    independent: false,
  },
];

const currencyStats = [
  {
    name: "United States Minor Outlying Islands",
    region: "Americas",
    population: 300,
    flag: "https://flagcdn.com/um.svg",
    independent: false,
  },
  {
    name: "Guernsey",
    capital: "St. Peter Port",
    region: "Europe",
    population: 62999,
    flag: "https://flagcdn.com/gg.svg",
    independent: false,
  },
  {
    name: "Isle of Man",
    capital: "Douglas",
    region: "Europe",
    population: 85032,
    flag: "https://flagcdn.com/im.svg",
    independent: false,
  },
  {
    name: "Jersey",
    capital: "Saint Helier",
    region: "Europe",
    population: 100800,
    flag: "https://flagcdn.com/je.svg",
    independent: false,
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    region: "Europe",
    population: 67215293,
    flag: "https://flagcdn.com/gb.svg",
    independent: false,
  },
];

module.exports = {
  allCountryData,
  unitedCountryData,
  networkError,
  apiResponseData,
  currencyStats,
};

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

module.exports = {
  allCountryData,
  unitedCountryData,
  networkError,
  apiResponseData,
};

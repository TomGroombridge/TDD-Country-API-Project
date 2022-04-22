const axios = require("axios");
const CountryApi = require("../classes/countries.js");
const {
  allCountryData,
  unitedCountryData,
  networkError,
  apiResponseData,
  currencyStats,
} = require("./mocks/countryData.js");
// const currencyStats = require("./mocks/currencyData.js");

jest.mock("axios");

describe("Fetching all countries data", () => {
  it("should be able to fetch all country data", async () => {
    axios.get.mockResolvedValueOnce(allCountryData);
    const result = await new CountryApi().fetchAll();
    expect(result[0].name).toEqual("Afhanistan");
  });

  it("should return an error if API call fails", async () => {
    axios.get.mockRejectedValueOnce(networkError);
    const result = await new CountryApi().fetchAll();
    expect(axios.get).toHaveBeenCalledWith("https://restcountries.com/v2/all");
    expect(result).toEqual([]);
  });
});

describe("fetch country by partial name", () => {
  it("should return an array of potential countries and their data", async () => {
    axios.get.mockResolvedValueOnce(unitedCountryData);
    const result = await new CountryApi().fetchCountries("united");
    expect(result.length).toEqual(3);
  });

  it("should return an error if API call fails", async () => {
    axios.get.mockRejectedValueOnce(networkError);
    const result = await new CountryApi().fetchCountries("united");
    expect(axios.get).toHaveBeenCalledWith(
      "https://restcountries.com/v2/name/united"
    );
    expect(result).toEqual([]);
  });
});

describe("format data for response", () => {
  it("should return new object of data", async () => {
    axios.get.mockResolvedValueOnce(apiResponseData);
    const result = await new CountryApi().allCountriesFormatted();
    expect(result).toEqual([
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
    ]);
  });

  it("should return empty object if you cannot return data", async () => {
    axios.get.mockRejectedValueOnce(networkError);
    const result = await new CountryApi().allCountriesFormatted();
    expect(result).toEqual([]);
  });
});

describe("fetch list of countries that use the same currency", () => {
  it.only("should return an array of countries that use the same currency", async () => {
    axios.get.mockResolvedValueOnce(currencyStats);
    const result = await new CountryApi().fetchCurrency();
    expect(result[1].name).toEqual("Guernsey");
  });

  it("should return an error if API call fails", async () => {
    axios.get.mockRejectedValueOnce(networkError);
    const result = await new CountryApi().fetchCurrency("gbp");
    expect(axios.get).toHaveBeenCalledWith(
      "https://restcountries.com/v2/name/united"
    );
    expect(result).toEqual([]);
  });
});

const axios = require('axios');
const { allCountryData, unitedCountryData, networkError, apiResponseData} = require('./mocks/countryData.js');

jest.mock("axios");

describe('Fetching all countries data', () => {
  it('should be able to fetch all country data', async() => {
    axios.get.mockResolvedValueOnce(allCountryData);
    const result = await new CountryApi().fetchAll();
    expect(result[0].name).toEqual('Afhanistan');
  });

  it('should return an error if API call fails', async() => {
    axios.get.mockRejectedValueOnce(networkError);
    const result = await new CountryApi().fetchAll()
    expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v2/all');
    expect(result).toEqual([]);
  })
})

describe('fetch country by partial name', () => {
  it('should return an array of potential countries and their data', async() => {
    axios.get.mockResolvedValueOnce(unitedCountryData);
    const result = await new CountryApi().fetchCountries('united');
    expect(result.length).toEqual(3);
  })

  it('should return an error if API call fails', async () => {
    axios.get.mockRejectedValueOnce(networkError);
    const result = await new CountryApi().fetchCountries('united')
    expect(axios.get).toHaveBeenCalledWith('https://restcountries.com/v2/all');
    expect(result).toEqual([]);
  })
})

describe('format data for response', () => {
  it('should return new object of data', () => {
    const result = new CountryApi().formattedData(apiResponseData);
    expect(result).toEqual({
      name: "Peru",
      population: 32971846,
      region: "Americas",
      flag_png: "https://flagcdn.com/w320/pe.png",
      capital: "Lima"
    })
  });

  it('should return empty object if you cannot return data', () => {
    const result = new CountryApi().formattedData({});
    expect(result).toEqual({});
  })
})
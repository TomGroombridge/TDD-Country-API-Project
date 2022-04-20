const allCountryData = [
  {
    name: "Afhanistan"
  },
  {
    name: "Åland Islands"
  }
]

const unitedCountryData = [
  {
    name: "United States Minor Outlying Islands"
  },
  {
    name: "United Arab Emirates"
  },
  {
    name: "United States of America"
  }
]

const networkError = new Error("Network Error")

const apiResponseData = {
  name: "Peru",
  topLevelDomain: [
    ".pe"
  ],
  alpha2Code: "PE",
  alpha3Code: "PER",
  callingCodes: [
    "51"
  ],
  capital: "Lima",
  altSpellings: [
    "PE",
    "Republic of Peru",
    " República del Perú"
  ],
  subregion: "South America",
  region: "Americas",
  population: 32971846,
  latlng: [
    -10.0,
    -76.0
  ],
  demonym: "Peruvian",
  area: 1285216.0,
  gini: 41.5,
  timezones: [
    "UTC-05:00"
  ],
  borders: [
    "BOL",
    "BRA",
    "CHL",
    "COL",
    "ECU"
  ],
  nativeName: "Perú",
  numericCode: "604",
  flags: {
    svg: "https://flagcdn.com/pe.svg",
    png: "https://flagcdn.com/w320/pe.png"
  },
  currencies: [
    {
      code: "PEN",
      name: "Peruvian sol",
      symbol: "S/."
    }
  ],
  languages: [
    {
      iso639_1: "es",
      iso639_2: "spa",
      name: "Spanish",
      nativeName: "Español"
    }
  ],
  translations: {
    br: "Peru",
    pt: "Peru",
    nl: "Peru",
    hr: "Peru",
    fa: "پرو",
    de: "Peru",
    es: "Perú",
    fr: "Pérou",
    ja: "ペルー",
    it: "Perù",
    hu: "Peru"
  },
  flag: "https://flagcdn.com/pe.svg",
  regionalBlocs: [
    {
      acronym: "PA",
      name: "Pacific Alliance",
      otherNames: [
        "Alianza del Pacífico"
      ]
    },
    {
      acronym: "USAN",
      name: "Union of South American Nations",
      otherAcronyms: [
        "UNASUR",
        "UNASUL",
        "UZAN"
      ],
      otherNames: [
        "Unión de Naciones Suramericanas",
        "União de Nações Sul-Americanas",
        "Unie van Zuid-Amerikaanse Naties",
        "South American Union"
      ]
    }
  ],
  cioc: "PER",
  independent: true
}

module.exports = {
  allCountryData,
  unitedCountryData,
  networkError,
  apiResponseData
}
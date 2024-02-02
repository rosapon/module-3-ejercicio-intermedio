import CountryCard from "./CountryCard"

function CountryList({ filterCountries }) {
  return (
    <div>
        {filterCountries.map((countryInfo, index) => <CountryCard countryInfo={countryInfo} key={index} />)}
    </div>
  )
}

export default CountryList
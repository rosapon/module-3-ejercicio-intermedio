import CountryCard from "./CountryCard"

function CountryList({ countries }) {
  return (
    <div>
        {countries.map((countryInfo, index) => <CountryCard countryInfo={countryInfo} key={index} />)}
    </div>
  )
}

export default CountryList
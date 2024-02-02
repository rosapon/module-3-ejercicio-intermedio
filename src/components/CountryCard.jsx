import React from 'react'

function CountryCard({ countryInfo }) {


  return (
    <div>
        <div className='country'>
            <h2>{countryInfo.flag}</h2>
            <h2>{countryInfo.name.common}</h2>
            <h3>{countryInfo.capital}</h3>
            <h3>{countryInfo.continents}</h3>
        </div>

    </div>
  )
}

export default CountryCard
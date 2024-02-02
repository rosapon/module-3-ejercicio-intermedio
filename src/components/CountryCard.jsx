import React from 'react'

function CountryCard({ countryInfo }) {


  return (
    <div>
        <div className='country'>
            <h2 className='country__flag'>{countryInfo.flag}</h2>
            <h2 className='country__name'>{countryInfo.name.common}</h2>
            <h3 className='country__capital'>{countryInfo.capital}</h3>
            <h3 className='country__continent'>{countryInfo.continents}</h3>
        </div>
    </div>
  )
}

export default CountryCard
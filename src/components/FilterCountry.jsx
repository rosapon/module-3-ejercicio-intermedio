

function FilterCountry({ setFilterCountry }){
  return (
    <div>
      <legend>by country</legend>
    <input type="text" onChange={(ev) => {
      setFilterCountry(ev.target.value)
    }} />
    </div>
  )
}

export default FilterCountry
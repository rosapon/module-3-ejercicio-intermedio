

function FilterContinent({ setFilterCont }) {
  return (
    <div>
      <legend>by continent</legend>
      <select name="continents" onChange={(ev) => {
        setFilterCont(ev.target.value)
      }}>
        <option value="All">All</option>
        <option value="africa">África</option>
        <option value="north-america">North America</option>
        <option value="south-america">South America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}

export default FilterContinent
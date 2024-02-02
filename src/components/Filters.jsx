import FilterContinent from "./FilterContinent";
import FilterCountry from "./FilterCountry";

function Filters({setFilterCountry}) {
  return (
    <div>
       <h4>Filters</h4>
        <FilterCountry setFilterCountry={setFilterCountry}/>
        <FilterContinent />
    </div>
  )
}

export default Filters
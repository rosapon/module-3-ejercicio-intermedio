import FilterContinent from "./FilterContinent";
import FilterCountry from "./FilterCountry";

function Filters({setFilterCountry, setFilterCont}) {
  return (
    <div>
       <h4>Filters</h4>
        <FilterCountry setFilterCountry={setFilterCountry}/>
        <FilterContinent setFilterCont={setFilterCont}/>
    </div>
  )
}

export default Filters
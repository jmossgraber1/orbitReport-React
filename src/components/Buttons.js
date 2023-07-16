import satData from "./satData";

const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;
  
displaySats.map((sat, id) => {
  return (
      <button onClick={() => filterByType(sat)} 
      key={id}> 
      {sat} Orbit</button>
  )    
});   

      <button onClick={() => setSat(satData)}> 
      All Orbits</button>
}

export default Buttons;
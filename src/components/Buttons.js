import satData from "./satData";
import ("./styling.css")

const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat1;
  const displaySats = props.displaySats;
  
  return(
    <>
{displaySats.map((sat, id) => {
  return (

      <button onClick={() => filterByType(sat)} 
      key={id}> 
      {sat}Orbit 
      </button>
  )
     
})}   

      <button onClick={() => setSat(satData)}> 
      All Orbits </button>



</>)}

export default Buttons;
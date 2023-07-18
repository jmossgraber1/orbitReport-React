
const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
      
          sat.map((id, data) => (
             <tr key = {id}>
           <td>{data.name}</td>
           <td>{data.type}</td>
           <td>{data.launchDate}</td>
           <td>{data.orbitType}</td>
        </tr> 
          )

         
        </tbody>
      </table>

  );
}
  //         //do I declare this as a function
  //         //where am I supposed to put this?
  //         //create 4 <td> tags --- 
  //         //is this declared like an html id?
  //         //<td>{data.name}</td>
  
//   sat.map((id, data) => {
//     return
//       (
//         <tr key = {id}>
//           <td>{data.name}</td>
//           <td>{data.type}</td>
//           <td>{data.launchDate}</td>
//           <td>{data.orbitType}</td>
//         </tr> 
//   )
//     }
// )


export default Table;
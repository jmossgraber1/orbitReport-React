import ("./styling.css")

const Table = ({ sat }) => {
  return (
      <table>
       <thead >
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((data, id) =>
        <tr key = {id}>
           <td>{data.name}</td>
           <td>{data.type}</td>
           <td>{data.launchDate}</td>
           <td>{data.operational === false ? "Non-operational" : "Operational"}<br></br>Orbit Status:{(data.orbitType)}</td>
        </tr>
      
      )}  
        </tbody>
      </table>

  )};

export default Table;
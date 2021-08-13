import React from "react";

function TrackingResult({ data }) {
  if (!data || !data.length) return null;
  return (
    <>
      <ul className="list-group">
      <h1 className="result-title">Resultado: </h1>
        <table style={{width:'100%'}}>
          <tr>
            <th>origem</th>
            <th>data</th>
            <th>destino</th>
            <th>status</th>
          </tr>
          {data.map(item => {
            const { status, data, origem, destino } = item;
            return (
              <>
                  <tr>
                    <td>{origem}</td>
                    <td>{data}</td>
                    <td>{destino}</td>
                    <td>{status}</td>
                  </tr>
              </>
            );
          })}
        </table>
      </ul>
      <button 
        type="submit" 
        className="btn"
        onClick={()=>window.location.reload()}
      >
          Realizar outra pesquisa
      </button>
    </>
  );
}

export default TrackingResult;
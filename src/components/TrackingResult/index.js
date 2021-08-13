import React from "react";

function TrackingResult({ data }) {
  if (!data || !data.length) return null;
  return (
    <>
      <ul className="list-group">
        {data.map(item => {
          const { data, origem, destino, status } = item;

          return (
            <>
              <h1 className="result-title">Resultado: </h1>
              <table key={status} style={{width:'100%'}}>
                <tr>
                  <th>origem</th>
                  <th>data</th>
                  <th>destino</th>
                  <th>status</th>
                </tr>
                <tr>
                  <td>XingXong {origem}</td>
                  <td>13/13/1337 {data}</td>
                  <td>United Estates {destino}</td>
                  <td>Está nos servidores da maicrosoft... {status}</td>
                </tr>
              </table>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default TrackingResult;

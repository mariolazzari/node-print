import React from "react";

const Report = props => {
  return (
    <div
      style={{
        width: "9cm",
        height: "6cm",
        border: "1px solid black",
        padding: 1,
      }}
    >
      <h1>Report title</h1>
      <h2>Example</h2>

      <h3>{`Ciao ${props.name}`}</h3>

      <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;

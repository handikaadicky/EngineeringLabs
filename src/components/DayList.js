import React from "react";
import { Table, Button } from "reactstrap";

function DayList() {
  return (
    <div className="daylist">
      <Table striped responsive borderless={false}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Title</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Tahap Awal</td>
            <td>Ujang - Chief Inspector</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default DayList;

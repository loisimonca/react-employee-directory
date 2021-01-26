import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeCard = () => {
  const [employees, setEmployee] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        // console.log(response.data.results);
        setEmployee([response.data.results]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCard;

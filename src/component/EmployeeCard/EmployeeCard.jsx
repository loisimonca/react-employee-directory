import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeCard = () => {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
        setUsersToDisplay(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortByName = () => {
    const tempUser = [...users];
    const sortedUser = tempUser.sort((a, b) => {
      const aValue = a.name.first;
      const bValue = b.name.first;
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });

    setUsersToDisplay(sortedUser);
  };
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Photo</th>
            <th scope="col" onClick={sortByName}>
              Name
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id.value}</th>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt="{user.name.first} {user.name.last}"
                ></img>
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCard;

import React, { Component } from "react";
import axios from "axios";

class EmployeeCard extends Component {
  state = {
    first: "",
    last: "",
    phone: "",
    email: "",
    image: "",
  };

  componentDidMount() {
    this.getEmployee();
    // console.log(this.state);
  }

  getEmployee = () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        console.log(response.data);
        this.setState({
          first: response.data.results[0].name.first,
          last: response.data.results[0].name.last,
          phone: response.data.results[0].phone,
          email: response.data.results[0].email,
          image: response.data.results[0].picture.thumbnail,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row"></div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <img
                  src={this.state.image}
                  style={{ height: 80 }}
                  alt="employee"
                ></img>
              </td>

              <td>{this.state.first}</td>
              <td>{this.state.last}</td>
              <td>{this.state.phone}</td>
              <td>{this.state.email}</td>
            </tr>
            {/* <tr>
              <th scope="row"></th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeCard;

import React, { Component } from "react";
import axios from "axios";

class Employee extends Component {
  state = {
    imageUrl: "",
  };

  componentDidMount() {
    this.getNewDog();
  }

  getNewDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response.data);
        this.setState({
          imageUrl: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleThumbsDown = () => {
    this.getNewDog();
  };
  handleThumbsUp = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const yourLuckyNumber = 3;
    if (randomNumber === yourLuckyNumber) {
      alert("The dog likes you too!");
    }
    this.getNewDog();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Welcome to Pupster!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={this.state.imageUrl} alt="dog" style={{ height: 400 }} />
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
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
  }
}

export default Employee;

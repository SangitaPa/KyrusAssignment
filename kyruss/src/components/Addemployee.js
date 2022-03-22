import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const BaseapiUrl = "https://6238c1db0a54d2ceab79cff8.mockapi.io/users";
class Addemployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  AddEmployee() {
    debugger;
    if (this.state.name == "" || this.state.name == undefined) {
      alert("employee Name is required");
    } else if (this.state.email == "" || this.state.email == undefined) {
      alert("email is required");
    }

    let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
    let body = {
      name: this.state.name,
      email: this.state.email,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };

    let baseurl = BaseapiUrl;
    fetch(baseurl, requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((results) => {
        if (results) {
          alert("Added successfully!");
          this.setState({
            name: "",
            email: "",
          });
        }
      })
      .catch((e) => {
        alert(e);
      });
  }

  render() {
    return (
      <div>
        <h1>Add Employee</h1>
        <Link variant="primary" to="/">
          View Employee list
        </Link>
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="employeeName">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Employee Name"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group>
                <Button variant="success" onClick={() => this.AddEmployee()}>
                  Save
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Addemployee;

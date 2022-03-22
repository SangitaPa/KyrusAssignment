import React from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dataList from "../server/db.json";
const BaseapiUrl = "https://6238c1db0a54d2ceab79cff8.mockapi.io/users";
class Employeelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      IsApiError: false,
    };
  }

  componentDidMount() {
    debugger;
    fetch("https://6238c1db0a54d2ceab79cff8.mockapi.io/users")
      .then((res) => res.json())
      .then(
        (result) => {
          debugger;
          this.setState({
            employees: result,
          });
        },
        (error) => {
          this.setState({ IsApiError: true });
        }
      );
  }
  deleteEmployee(EmpId) {
    debugger;
    const { employees } = this.state;
    const apiUrl = BaseapiUrl + "/" + EmpId;

    fetch(apiUrl, { method: "DELETE" })
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        this.setState({
          employees: employees.filter((employee) => employee.id !== EmpId),
        });
        alert("Delete successful");
      })
      .catch((error) => {
        alert("There was an error!");
        console.error("There was an error!", error);
      });
  }
  render() {
    var employeeslist = this.state.employees;
    debugger;
    if (employeeslist && employeeslist.length > 0) {
      return (
        <div>
          <h2>Users List</h2>
          <Link variant="primary" to="/addemployee">
            Add Employee
          </Link>
          {/* {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>} */}
          <Table className="table">
            <thead>
              <tr>
                <th>EmpID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeslist.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>
                    <Link variant="info" to={"/editemployee/" + emp.id}>
                      Edit
                    </Link>
                    &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => this.deleteEmployee(emp.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return <div>No Record Found</div>;
    }
  }
}
export default Employeelist;

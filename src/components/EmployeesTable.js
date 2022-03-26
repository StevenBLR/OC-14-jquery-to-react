import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
  },
  {
    name: "Department",
    selector: (row) => row.department,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.birthDate,
  },
  {
    name: "Street",
    selector: (row) => row.street,
  },
  {
    name: "City",
    selector: (row) => row.city,
  },
  {
    name: "State",
    selector: (row) => row.state,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
  },
];
// id | firstName | lastName | StartDate ...
// [TODO] - Get employees from JSON
const employeesData = [];

function EmployeesTable() {
  return <DataTable columns={columns} data={employeesData} />;
}

export default EmployeesTable;
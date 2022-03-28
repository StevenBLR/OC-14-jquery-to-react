import React from "react";
import EmployeesTable from "../components/EmployeesTable";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Employees() {
  return (
    <EmployeeStyled>
      <Link to="/">Home</Link>
      <h1>Current Employees</h1>
      <EmployeesTable />
    </EmployeeStyled>
  );
}

export default Employees;

const EmployeeStyled = styled.div`
  margin: 25px;
  select {
    width: 15px;
    margin: auto;
  }
  h1 {
    text-align: center;
  }
`;

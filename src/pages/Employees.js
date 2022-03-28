import React, { useState } from "react";
import EmployeesTable from "../components/EmployeesTable";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function Employees() {
  const { register } = useForm();

  return (
    <EmployeeStyled>
      <h1>Current Employees</h1>
      {
        //#region Hand made entries
        /* <form className="employees">
        <span className="employees__entries" style={entriesStyle}>
          <select {...register("entries")}>
            {viewOptions.map((v, i) => (
              <option
                value={v}
                key={`view_${i}`}
                onChange={() => onEntriesChange}
              >
                {v}
              </option>
            ))}
          </select>
          <p style={{ marginLeft: "15px" }}>Entries</p>
        </span>
      </form> */
        //#endregion
      }
      <EmployeesTable />
    </EmployeeStyled>
  );
}

export default Employees;

const EmployeeStyled = styled.div`
  select {
    width: 15px;
    margin: auto;
  }
`;

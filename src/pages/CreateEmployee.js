import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { departments } from "../data/departments";
import { states } from "../data/states";
import "../pico.min.css";
function CreateEmployee() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="new-employee"
        style={formStyle}
      >
        <label>First Name</label>
        <input {...register("firstName")} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <label>Date of Birth</label>
        <input type="date" {...register("birthDate", { valueAsDate: true })} />
        <label>Start Date</label>
        <input type="date" {...register("startDate", { valueAsDate: true })} />
        <div className="new-employee__adress" style={adressSectionStyle}>
          <h3>Address</h3>
          <label>Street</label>
          <input {...register("street")} />
          <label>City</label>
          <input {...register("city")} />
          <label>State</label>
          <select {...register("state")}>
            {states.map((s) => (
              <option value={s.name}>{s.name}</option>
            ))}
          </select>
          <label>Zip Code</label>
          <input
            type="number"
            {...register("zipCode", {
              valueAsNumber: true,
            })}
          />
          <label>Department</label>
          <select {...register("department")}>
            {departments.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default CreateEmployee;

const formStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "50px",
};

const adressSectionStyle = {
  display: "flex",
  marginBlock: "25px",
  flexDirection: "column",
};

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { setLocalData, getLocalData } from "../utils/localStorage";
import { departments } from "../data/departments";
import { states } from "../data/states";
import "../pico.min.css";
import Modal from "../components/Modal";

function CreateEmployee() {
  const { register, handleSubmit } = useForm();
  const [showModal, setShowModal] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    // X - Add new employee in local storage
    setLocalData("employees", [...getLocalData("employees"), data]);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} show={true}>
          <p>Employee Created!</p>
        </Modal>
      )}
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
            {states.map((s, i) => (
              <option value={s.name} key={`state_${i}`}>
                {s.name}
              </option>
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
            {departments.map((d, i) => (
              <option value={d} key={`dptm_${i}`}>
                {d}
              </option>
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
  margin: "auto",
  padding: "25px",
  maxWidth: "800px",
};

const adressSectionStyle = {
  display: "flex",
  marginBlock: "25px",
  flexDirection: "column",
};

import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import "./index.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const validateEmployee = (empData) => {
  const errors = {};
  if (!empData.Name) {
    errors.Name = "Please enter employee name";
  } else if (empData.Name.length > 15) {
    errors.Name = "Employee Name cannot exceeds 15 characters";
  }
  if (!empData.Location) {
    errors.Location = "Please enter employee Location";
  }
  if (!empData.EmailId) {
    errors.EmailId = "Please enter Email Id";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)
  ) {
    errors.EmailId = "Invalid email address";
  }
  if (!empData.Id) {
    errors.Id = "Please enter Employee Id";
  } else if (
    !/^[0-9]{6}$/i.test(empData.Id)
  ) {
    errors.Id = "Employee Id should be Integer";
  }
  else if (empData.Id.length > 6) {
    errors.Id = "Employee Id cannot exceeds more than 6";
  }
  if (!empData.mb) {
    errors.mb = "Please enter Mobile No";
  }
   else if (
    !/^[0-9]{10}$/i.test(empData.mb)
  ) {
    errors.mb = "Invalid mobile No";
  }
  return errors;
};
const EmployeeComponent = () => {
  const formik = useFormik({
    initialValues: {
      Id: "",
      Name: "",
      Location: "",
      Salary: "",
      MobileNo: "",
      EmailId: "",
    },
    validate: validateEmployee,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div><br></br>
      <h3 align="center">Employee Form</h3><br></br>
      <form className="wer" align="center" onSubmit={formik.handleSubmit}>

        <p>
          <label htmlFor="Id">Employee ID: </label>
          <input
            type="text"
            name="Id"
            id="Id"
            value={formik.values.Id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
{formik.touched.Id && formik.errors.Id ? (
            <span style={{ color: "red" }}>{formik.errors.Id}</span>
          ) : null}
        </p>
        <p>
          <label htmlFor="Name">Employee Name: </label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
          {formik.touched.Name && formik.errors.Name ? (
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
          ) : null}
        </p>
        <p>
          <label htmlFor="Location">Employee Location: </label>
          <input
            type="text"
            name="Location"
            id="Location"
            value={formik.values.Location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
          {formik.touched.Location && formik.errors.Location ? (
            <span style={{ color: "red" }}>{formik.errors.Location}</span>
          ) : null}
        </p>
        <p>
          <label htmlFor="Salary">Employee Salary: </label>
          <input
            type="text"
            name="Salary"
            id="Salary"
            value={formik.values.Salary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
        </p>
        <p>
          <label htmlFor="mb">Mobile No: </label>
          <input
            type="text"
            name="mb"
            id="mb"
            value={formik.values.mb}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
{formik.touched.mb && formik.errors.mb ? (
            <span style={{ color: "red" }}>{formik.errors.mb}</span>
          ) : null}
        </p>
        <p>
          <label htmlFor="EmailId">Employee EmailId: </label>
          <input
            type="text"
            name="EmailId"
            id="EmailId"
            value={formik.values.EmailId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
          {formik.touched.EmailId && formik.errors.EmailId ? (
            <span style={{ color: "red" }}>{formik.errors.EmailId}</span>
          ) : null}
        </p>
        <button type="submit">Submit</button>


      </form>
    </div>
  );
};
const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById("root"));
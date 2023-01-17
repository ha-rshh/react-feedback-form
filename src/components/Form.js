import React from "react";
import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    data.name === "" || data.email === "" || data.feedback === "" ? alert('Please fill all the fields') : console.log(data);  
  };
  return (
    <>
      <div className="feedbackform">
        <h1> Feedback Form</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="What should we call you?"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3 labelcenter">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            We would love to hear your thoughts, suggestions or problems with
            anything so we can improve
          </label>
          <textarea
            className="form-control"
            name="feedback"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="col-12 btn-container">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={HandleSubmit}
          >
            Submit form
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react'
import "../User/User.css";
import { login } from '../../Redux/AuthReducer/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../style/Admin.css"

const Admin = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [form, setForm] = useState({
    id: Date.now(),
    name: "",
    role: "",
    singinAt: "",
    secretkey:"",
    Auth:true
  });
  const onchange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
     dispatch(login({ ...form }));
    setForm({
      ...form,
      name: "",
      role: "",
      singinAt: "",
      secretkey:""
    });
    navigate("/dashboard")
  };
  return (
    <div className="form_content">
      <h1>Admin Area</h1>
    <form className="form" onSubmit={handleSubmit}>
      <label>Name:-</label>
      <input
      required
        placeholder="Enter Your Name"
        name="name"
        value={form.name}
        onChange={onchange}
      />

      <label>Role:-</label>
      <select
      required
        placeholder="select Role"
        name="role"
        value={form.role}
        onChange={onchange}
      >
        <option></option>
        <option>r1</option>
        <option>r2</option>
        <option>r3</option>
      </select>

      <label>Date:-</label>
      <input
      required
        type="date"
        name="singinAt"
        value={form.postedAt}
        onChange={onchange}
      />
      <label>Secret key:-</label>
      <input
      required
      placeholder='Enter Secret Key'
        type="number"
        name="secretkey"
        value={form.secretkey}
        onChange={onchange}
      />
      <button type="submit">
      Submit</button>
    </form>
  </div>
  )
}

export default Admin
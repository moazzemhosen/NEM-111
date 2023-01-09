import React, { useState } from "react";
import "./User.css";
import { useDispatch } from "react-redux";
import { userPostData } from "../../Redux/AppReducer/action";

const User = () => {
  const dispatch = useDispatch();
  const [review, setReview] = useState(false);
  const [image, setImage] = useState("");
  const [form, setForm] = useState({
    id: Date.now(),
    username: "",
    age: "",
    city: "",
    email: "",
    gender: "",
    isIndian: false,
  });
  const onchange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      handleimg(e);
      setForm({
        ...form,
        [name]: image,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  const handleimg = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setImage(reader.result);
    });
    if (file) {
      reader.readAsDataURL(file);
    }
    return file;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(userPostData({ ...form, photo: image }));
    setForm({
      username: "",
      age: "",
      city: "",
      email: "",
      gender: "",
      isIndian: false,
    });
    setReview(true);
  };

  return (
    <div className="form_content">
      <form className="form" onSubmit={handleOnSubmit}>
        Form:
        <div>
          <label>Name:</label>
          <input
            required
            type="text"
            placeholder="Enter Your Name..."
            name="username"
            value={form.name}
            onChange={onchange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
          required
            type="number"
            placeholder="Enter Your Number..."
            name="age"
            value={form.age}
            onChange={onchange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
          required
            type="text"
            placeholder="Enter Your Email..."
            name="email"
            value={form.email}
            onChange={onchange}
          />
        </div>
        <div>
          <label>Profession</label>
          <select
          required
            placeholder="select Profession"
            name="porfession"
            value={form.porfession}
            onChange={onchange}
          >
            <option>Employed</option>
            <option>Self-Employed</option>
            <option>Business</option>
            <option>Other</option>
          </select>
        </div>
        {/* input type select */}
        <div>
          <label>City:</label>
          <input
          required
            type="text"
            placeholder="Enter Your City..."
            name="city"
            value={form.city}
            onChange={onchange}
          />
        </div>
        {/* checkbox input */}
        <div>
          <label className="block">Is Indian :</label>
          <input
            type="checkbox"
            name="isIndian"
            checked={form.isIndian}
            onChange={onchange}
          />
        </div>
        {/* //Radio buttons */}
        <div className="flex">
          <label className="block">Gender :</label>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Male"}
              onChange={onchange}
            />
            <label>Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"Female"}
              onChange={onchange}
            />
            <label>Female</label>
          </div>
        </div>
        {/* Input type File */}
        <div>
          <label>Upload file:-</label>
          <input
          required
            type="file"
            name="photo"
            checked={form.photo}
            onChange={(e) => handleimg(e)}
          />
        </div>
        <button type="submit">Submit Now</button>
      </form>
      {review ? (
        <div className="review">
          Your Application is under Review Please wait .....
          You can check your status in Accept or Reject page .....
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;

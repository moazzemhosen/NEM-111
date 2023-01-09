import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "../components/TableRow";
import {
  acceptPostData,
  getData,
  updateData,
} from "../Redux/AppReducer/action";
import { useNavigate } from "react-router-dom";
import "./style/DashBoard.css"

const Dashboard = () => {
  const navigate=useNavigate()
  const data = useSelector((state) => state.AppReducer.USER);
  const { secretkey, role } = useSelector((state) => state.AuthReducer.ADMIN);

  const [show, setShow] = useState(false);
  const [upDate, setUpDate] = useState({});
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  },[]);

  const handleupdated=()=>{
    setShow(false)
    dispatch(updateData(upDate.id,{...upDate,reajectreason:value}));
    
  }

  const handleaccept = (dat) => {
    if (secretkey == "123" && role == "r1") {
      dispatch(acceptPostData(dat.id,dat));
     alert("Successfully added")

    } else {
      alert("You are not authorise");
    }
  };

  const handlereject = (dat) => {
    if (secretkey == "123" && role == "r1") {
      setShow(true)
      setUpDate(dat)
    } else {
      alert("You are not authorise");
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Profession</th>
            <th>Indian</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((e) => (
              <TableRow
                key={e.id}
                data={e}
                handleaccept={handleaccept}
                handlereject={handlereject}
              />
            ))}
        </tbody>
      </table>
      {show ? (
        <div>
          <input
            type="text"
            placeholder="Reason to reject"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleupdated}>Add</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;

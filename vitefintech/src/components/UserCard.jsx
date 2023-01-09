import React from "react";
import "./style/UserCard.css";

const UserCard = ({ data }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={data.photo} alt="No image" />
      </div>
      <div className="content">
        <div>
          <h4>Name:-</h4>
          <h4>{data.username}</h4>
        </div>
        <div>
          <h4>Age:-</h4>
          <h4>{data.age}</h4>
        </div>
        <div>
          <h4>City:-</h4>
          <h4>{data.city}</h4>
        </div>
        <div>
          <h4>Email:-</h4>
          <h4>{data.email}</h4>
        </div>
        <div>
          <h4>Gender:-</h4>
          <h4>{data.gender}</h4>
        </div>
        <div>
          <h4>Profession:-</h4>
          <h4>{data.porfession}</h4>
        </div>
        <div>
          <h4>Indian:-</h4>
          <h4>{data.isIndian ? "yes" : "No"}</h4>
        </div>
       
        {data.reajectreason ? <div>
          <h4>Reason:-</h4>
          <h4 className="red">{data.reajectreason}</h4>
        </div>:""}

       {data.reajectreason ? <div className="icon">Rejected</div>:<div className="icon">verified</div>}
      </div>
    </div>
  );
};

export default UserCard;

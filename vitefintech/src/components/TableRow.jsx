import React from "react";

const TableRow = ({data,handleaccept,handlereject}) => {

  return (
      <tr>
        <td>{data.id}</td>
        <td className="td_img"><img src={data.photo} alt="No image" /></td>
        <td>{data.username}</td>
        <td>{data.age}</td>
        <td>{data.city}</td>
        <td>{data.gender}</td>
        <td>{data.porfession}</td>
        <td>{data.isIndian ? "Yes":"No"}</td>
        <td className="accept" onClick={()=>handleaccept(data)}>Accept</td>
        <td className="reject" onClick={()=>handlereject(data)}>Reject</td>
      </tr>
   
  );
};

export default TableRow;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptgetData } from "../../Redux/AppReducer/action";
import UserCard from "../../components/UserCard";
import "../style/Accept.css"

const Accept = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.ACCEPT);
  console.log("acc", data);
  useEffect(() => {
    dispatch(acceptgetData());
  }, []);
  return <div className="accept_page">
{data.length>0 && data.map((e)=>{
  return <UserCard key={e.id} data={e}/>
})}
  </div>;
};

export default Accept;

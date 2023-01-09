import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import { rejectgetData } from '../../Redux/AppReducer/action';
import "../style/Accept.css"

const Reject = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.REJECTED);
  // console.log("acc", data);
  useEffect(() => {
    dispatch(rejectgetData());
  }, []);
  return <div className="accept_page">
{data.length>0 && data.map((e)=>{
  return <UserCard key={e.id} data={e}/>
})}
  </div>;
}

export default Reject
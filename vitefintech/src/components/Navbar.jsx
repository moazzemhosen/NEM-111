import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>       
<Link to="/"><div className='nav_div'>User</div></Link>
<Link to="/admin"><div className='nav_div'>Admin</div></Link>
<Link to="/dashboard"><div className='nav_div'>Dashboard</div></Link>
<Link to="/accept"><div className='nav_div'>Accept</div></Link>
<Link to="reject"><div className='nav_div'>Reject</div></Link>
    </div>
  )
}

export default Navbar
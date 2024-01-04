import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ()=>{
    const navigate= useNavigate()
    return (
        <nav>
            <div style={{marginLeft:"15px"}} className='nav-one'>
                <h3>Shopping Cart</h3>
            </div>
            <div className='nav-two'>
                <h3 onClick={()=>navigate("/")}>Home</h3>
                <h3 style={{marginLeft:"15px", marginRight:"8px"}} onClick={()=>navigate("/basket")}>Cart Page</h3>
            </div>
        </nav>
    )
}

export default Navbar
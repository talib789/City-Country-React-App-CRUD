import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", backgroundColor:"black", padding:"21px"}}>
        <Link style={{textDecoration:'none', fontSize:'18px', fontWeight:'500', color:"white"}} to='/'>Home</Link>
        <Link style={{textDecoration:'none', fontSize:'18px', fontWeight:'500', color:"white"}} to='/add-city'>Add City</Link>
        <Link style={{textDecoration:'none', fontSize:'18px', fontWeight:'500', color:"white"}} to='/add-country'>Add Country</Link>
    </div>
  )
}

export default Navbar
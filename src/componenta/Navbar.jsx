import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-warning">
    <Link className="navbar-brand " to={'/'}></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link style={{fontSize:'40px',fontWeight:'500'}} class="nav-link active " aria-current="page" href="#"><IoFastFoodOutline size={'35px'}/>Recipe Website</Link>
        </li>
        </ul>
    
     

    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar

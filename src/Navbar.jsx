
import { Link } from "react-router-dom"
import Logo from "./assets/Images/portrait.png"
import {FaHome , FaEdit} from "react-icons/fa"



function Navbar() {
  return (
<div className="nav-bar">
<div className="logo"> 
        <img className="logo-img" src={Logo} alt="" />
        <h2 >Humz</h2>
        </div>
    <div className="nav-links">

         <Link to = "/" className="home" > <FaHome/> Home</Link>
         <Link to = "/about">About</Link>
         <Link to = "/category" >Category</Link>
         <Link to = "/popular" >Popular</Link>
         <Link to = "/write" className="write">Write <FaEdit /></Link>
         
    </div>
    <div className="account">
         <Link to = "/signin" >SignIn</Link>
         <Link to = "/signup" >SignUp</Link>
   
    </div>
</div>
    
   
  )
}

export default Navbar
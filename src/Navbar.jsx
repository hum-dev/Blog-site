import NavLink from "./NavLink"


function Navbar() {
  return (
<div className="nav-bar">
<div className="logo"> 
        <img className="logo-img" src="/src/assets/Images/portrait.png" alt="" />
        <h2 >Humz</h2>
        </div>
    <div className="nav-links">
         <NavLink link="/home" label="Home" />
         <NavLink link="/home" label="Home" />
         <NavLink link="/home" label="Home" />
         <NavLink link="/home" label="Home" />
         <NavLink link="/home" label="Home" />
    </div>
    <div className="account">
    <NavLink link="/home" label="Home" />
    <NavLink link="/home" label="Home" />
    </div>
</div>
    
   
  )
}

export default Navbar
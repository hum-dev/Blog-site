import { Link } from "react-router-dom"

function SignIn() {
  return (
    
    <div className="container">
        <div className="form">
                <form action="" method="post" name="form">
                     <label htmlFor="username">Full Name</label>
                     <input type="text" name="username" id="username" placeholder="Username" required />
    
    
                     <label htmlFor="idnumber">ID Number</label>
                     <input type="number" name="idnumber" id="idnumber" placeholder="ID Number" required />

    
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" placeholder="Password"  min="8" max="10" required />
    
                    
                     <button type="submit" name="login" className="btn">Login</button>
                </form>
            <p> Don't have an account? <a href=""><Link to = "/signup" >Register Here</Link></a></p> 
        </div>
        </div>
    
    
  )
}

export default SignIn
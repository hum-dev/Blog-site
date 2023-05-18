import { Link } from "react-router-dom"


function Button() {
  return (
    <div>
      <Link to = "/dummy" ><button className="btn">Read more</button></Link>
        {/* <button className="btn">Read more</button> */}
    </div>
  )
}

export default Button
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from "react-router-dom"

function Write() {
  return (
    <>
    <Navbar /> 
    <div className="write-blog">
    <div className="publish">
      <h1>Publish your blog</h1>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your blog..." />
        <Link to = "" ><button className="btn">Publish</button></Link>
      </form>

    </div>
    </div>
    <Footer />
    </>
  )
}

export default Write
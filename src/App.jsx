import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
// import Blog from './Blog'
// import Content from './Content'
// import Footer from './Footer'
// import Navbar from './Navbar'
// import Side from './Side'
// import Title from './assets/Title'
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Popular from "./Pages/Popular";
import Write from "./Pages/Write";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
// import Button from "./button";
import Dummy from "./Pages/Dummy";
import NotFound from "./Pages/NotFound";

function App() {
 

  return (
    <>
      
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/write" element={<Write />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dummy" element={<Dummy />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
</BrowserRouter>




        {/* <Navbar /> 
        <Blog />
        <Title />
        <div className='body'>
        <Content />
        <Side />
        </div>
        <Footer /> */}
     
     
    </>
  )
}

export default App

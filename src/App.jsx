
import './App.css'
import Blog from './Blog'
import Content from './Content'
import Footer from './Footer'
import Navbar from './Navbar'
import Side from './Side'
import Title from './assets/Title'

function App() {
 

  return (
    <>
      <div>
        <Blog />
        <Navbar /> 
        <Title />
        <div className='body'>
        <Content />
        <Side />
        </div>
       
        <Footer />
      </div>
     
    </>
  )
}

export default App

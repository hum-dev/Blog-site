
import './App.css'
import Blog from './Blog'
import Content from './Content'
import Footer from './Footer'
import Side from './Side'
import Title from './assets/Title'

function App() {
 

  return (
    <>
      <div>
        <Blog />
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

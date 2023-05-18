import Navbar from '../Navbar'
import Footer from '../Footer'
import Content from '../Content'
import Side from '../Side'
import Title from '../Title'

function Home() {
  return (
    
    <>
    <Navbar />
    <Title />
    <div className='body'>
        <Content />
        <Side />
    </div>
    <Footer />
    </>
    
  )
}

export default Home
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {
 

  return (
   <>
   <div className='text-white'>
     <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
     <Navbar/>
     <Manager/>
   </div>
  
   </>
  )
}

export default App

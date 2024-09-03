import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

function App() {


  return (
    <div className='w-[100%] h-[100vh] relative flex flex-col'>
  
      <Card1/>
      {/* <div className='w-[500px] h-[5px] inline-block bg-gray-800 rounded-sm absolute mx-auto
      left-[520px]'></div> */}
      <Card2/>
     
    </div>
  )
}

export default App

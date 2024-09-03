import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

function App() {


  return (
    <div className='w-[100%] h-[100vh] bg-[#303439] overflow-hidden relative flex flex-col'>
  
      <Card1/>
      <div className='w-[630px] h-[5px] inline-block bg-[#303439] absolute top-[362px] mx-auto
      right-[125px] rounded-3xl'
      style={{ boxShadow: '0px 3px 5px' }}
      ></div>
      <Card2/>
      <div className='w-[630px] h-[5px] inline-block bg-[#303439] absolute bottom-[10px] mx-auto
      right-[125px] rounded-3xl '
      style={{ boxShadow: '0px 3px 5px' }}
      ></div>
    </div>
  )
}

export default App

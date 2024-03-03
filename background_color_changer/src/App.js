import './App.css';
import { useState } from 'react';

function App() {
  const [color , setColor] = useState("olive");
  return (
    <>
    <div className='w-full h-screen duration-200' style={{ backgroundColor:color }}>
    </div>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flexwrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-xl">
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'red'}} onClick={()=> setColor('Red')}>Red</button>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'green'}} onClick={()=> setColor('Green')}>Green</button>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'lavender'}} onClick={()=> setColor('Lavender')}>Lavinder</button>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'blue'}} onClick={()=> setColor('Blue')}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-xl shadow-lg' style={{backgroundColor:'yellow'}} onClick={()=> setColor('Yellow')}>Yellow</button>
      </div>
    </div>
    
    </>
  );
}

export default App;

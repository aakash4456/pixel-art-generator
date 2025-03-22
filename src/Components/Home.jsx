import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Grid_Context from '../GridContext/Grid_Context';

function Home() {
  const {gridSize, setGridSize} = useContext(Grid_Context);

  return (
    <>  
      <div className="h-[100vh] w-full bg-[url('/pexels4.jpg')] bg-cover bg-center relative flex justify-center">
        <div className="w-[91%] h-[92vh] bg-white flex flex-col items-center gap-8 pt-20 absolute bottom-0 rounded-t-4xl">
          <h1 className='border-2 border-red-700 px-3 py-5 rounded-2xl text-slate-800 text-5xl hover:text-red-700 hover:border-gray-500 transition duration-300'> Welcome to <span className='font-bold'>Pixel</span> Art Generator</h1>
          <h2 className='text-3xl font-medium'>Create Your GRID</h2>
          <input 
            className='border-2 w-[12rem] cursor-pointer'
            type="range"
            min={3}
            max={20}
            value={gridSize}
            onChange={(e) => setGridSize(e.target.value)}
            id="baar"
          />
          <p className='font-sans font-medium text-[20px]'>Grid Size : {gridSize} * {gridSize}</p>
          <NavLink 
            to={"/grid"}
            className="
            border-2 border-transparent 
            bg-gradient-to-r from-blue-600 to-indigo-600 
            text-white font-semibold 
            px-5 py-2 rounded-full 
            shadow-lg hover:from-blue-500 hover:to-indigo-500 
            transition duration-300 ease-in-out 
            transform hover:scale-105 active:scale-95"
          >
            go to grid
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Home;
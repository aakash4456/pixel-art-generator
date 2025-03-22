import React, { useContext, useState } from 'react'
import Grid_Context from '../GridContext/Grid_Context'
import { NavLink } from 'react-router-dom';
import '../App.css'
import { RxReset } from "react-icons/rx";
import { PiEraserDuotone } from "react-icons/pi";
import { TbEraserOff } from "react-icons/tb";

function Grid() {
  const { gridSize, setGridSize } = useContext(Grid_Context);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentColor, setCurrentColor] = useState('#b91c1c');
  const [openColorInput, setOpenColorInput] = useState(false);

  return (
    <div className='flex flex-col gap-10 justify-center items-center w-full h-screen bg-slate-900'>
      <div className='flex gap-10 items-center border-0 text-4xl'>
        <div className="tooltip">
          <NavLink
            to={'/'}
            onClick={() => {
              setGridSize(6);
            }}
          >
            <RxReset className='border-1 rounded bg-gray-300 text-blue-950 p-1 hover:text-red-700 hover:scale-102 transition duration-300 hover:bg-white'/>
          </NavLink>
          <span className="tooltiptext">Reset</span>
        </div>
        <div className="tooltip pt-1">
          <input
            type='color'
            id='style1'
            value={currentColor}
            disabled={openColorInput}
            onChange={(e) => {
              setCurrentColor(e.target.value);
            }}
          />
          <span className="tooltiptext">Color</span>
        </div>
        <div className="tooltip pt-1">
          <button
            className='border-1 rounded bg-gray-300 text-blue-950 hover:text-red-700 hover:scale-102 transition duration-300 hover:bg-white'
            onClick={(e) => {
              if(openColorInput === false){
                setOpenColorInput(true);
                setCurrentColor('#FFFFFF');
                setIsMouseDown(false);
                e.currentTarget.style.backgroundColor = "#b38f69";
              } else if(openColorInput === true){
                setOpenColorInput(false);
                setCurrentColor('#b91c1c');
                setIsMouseDown(false);
                e.currentTarget.style.backgroundColor = "#d1d5db";
              }
            }}
          >
            <PiEraserDuotone />
          </button>
          <span className="tooltiptext">Erase</span>
        </div>
        <div className="tooltip pt-1">
          <button
            className='border-1 rounded bg-gray-300 text-blue-950 p-0 hover:text-red-700 hover:scale-102 transition duration-300 hover:bg-white'
            onClick={() => {
              console.log("I am clicked");
              window.location.reload();
            }}
          >
            <TbEraserOff />
          </button>
          <span className="tooltiptext">Erase All</span>
        </div>
      </div>
      
      <div
        className="gap-[.050rem] bg-[#111010] border-2 border-red-700 w-[400px] h-[400px] rounded shadow-lg shadow-gray-700"
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gridSize}, minmax(0, 1fr))`,
        }}>
        {Array.from({ length: gridSize * gridSize }).map((_, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-md hover:scale-101 hover:border-[1px]"
            id={`${index}${Date.now()}`}
            onMouseEnter={(e) => {
              if (isMouseDown) {
                e.target.style.backgroundColor = currentColor;
              }
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Grid ;
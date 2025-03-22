import React, { useState, useEffect } from 'react'
import Grid_Context from './Grid_Context';

const storageKey = "PixelArt";

function Grid_Context_provider({children}) {
  const [gridSize, setGridSize] = useState(() => {
    try {
      const rawData = localStorage.getItem(storageKey);
      if (rawData === null) return 6;
      return JSON.parse(rawData);
    } catch (error) {
      console.error("Error parsing grid size from localStorage, using default value.");
      return 6; // Return default value if there is an error in parsing
    }
  });
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(gridSize));
  }, [gridSize]);
  
  return (
    <Grid_Context.Provider value={{gridSize, setGridSize}}>
      {children}
    </Grid_Context.Provider>
  )
}

export default Grid_Context_provider ;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Grid from './Components/Grid.jsx'
import Grid_Context_provider from './GridContext/Grid_Context_provider.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Grid_Context_provider> <Home /> </Grid_Context_provider>} />
      <Route path='grid' element={<Grid_Context_provider> <Grid /> </Grid_Context_provider>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

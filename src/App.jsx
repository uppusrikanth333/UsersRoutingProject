import { useEffect, useState, useRef, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import AllRoutes from './Components/AllRoutes'




function App() {
 return(
  <>
  <Navbar/>
<AllRoutes/>
  </>
 )
}
export default App





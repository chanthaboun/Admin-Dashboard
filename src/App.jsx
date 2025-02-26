import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Home from './Components/Home.jsx'


function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App

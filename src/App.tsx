import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SidebarAdmin from './components/SidebarAdmin'
import SidebarUser from './components/SidebarUser'
import './App.css'

function App() {
  return (
    <>
      {/* <SidebarUser /> */}
      <SidebarAdmin />
    </>
  )
}

export default App

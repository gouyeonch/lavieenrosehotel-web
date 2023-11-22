import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SidebarAdmin from './components/Sidebar/SidebarAdmin'
import SidebarUser from './components/Sidebar/SidebarUser'
import TopBar from './components/TopBar/TopBar'
import './App.css'

function App() {
  return (
    <>
      <TopBar pageName='페이지 이름'></TopBar>
      {/* <SidebarUser /> */}
      <SidebarAdmin />
    </>
  )
}

export default App

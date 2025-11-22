import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainpage from './component/Mainpage'
import LoginPage from './component/loginPage'

function App() {

  return (
    <>
    <div className='flex flex-col items-center mt-5'>
      <LoginPage />
      <Mainpage />
    </div>
    </>
  )
}
 
export default App

import './App.css'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App

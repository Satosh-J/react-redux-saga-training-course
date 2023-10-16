import './App.css'
import NavBar from './components/Navbar'
import { Outlet } from 'react-router-dom';
import { Content } from './components/Content';
import { AuthProvider } from './AuthContext';


function App() {

  return (
    <AuthProvider>
      <>
        <NavBar />
        <Outlet />
        <Content />
      </>
    </AuthProvider>
  )
}

export default App

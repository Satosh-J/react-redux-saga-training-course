import { Outlet } from 'react-router-dom';
// Comment this line as we are going to integrate Redux
// import { AuthProvider } from './AuthContext';
import { Provider } from 'react-redux';
import { store } from './store/store';

import NavBar from './components/Navbar'
import { Content } from './components/Content';
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <NavBar />
      <Outlet />
      <Content />
    </Provider>
  )
}

export default App

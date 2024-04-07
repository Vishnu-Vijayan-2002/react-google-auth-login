import './App.css'
import Login from './pages/Login'
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<LoginPage/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/home'} element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App

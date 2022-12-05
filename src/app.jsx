import { useState } from 'preact/hooks'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home, Login , Register, Chat, Profile} from './pages'
import { AuthProvider } from './services/AuthContext';
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

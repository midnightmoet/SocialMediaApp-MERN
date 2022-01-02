import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/profile/:username' element={<Profile />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

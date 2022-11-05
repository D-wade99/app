import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;

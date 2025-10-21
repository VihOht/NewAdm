import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Login from './routes/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

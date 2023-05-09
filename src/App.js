import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

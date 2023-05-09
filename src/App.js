import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ChangeMode from './Components/DataProvider/DataContext';
import Details from './Components/Details';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

import './App.css';


function App() {
  return (
    <Router>
      <ChangeMode>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Details />} />
        </Routes>
      </ChangeMode>
    </Router>
  );
}

export default App;

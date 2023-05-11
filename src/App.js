import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ChangeMode from './Components/DataProvider/DataContext';
import Details from './Components/Details';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Apply from './Components/Apply';
import ListApplyed from './Components/ListApplyed';
import Error from './Components/Error';

import './App.css';

function App() {
  return (
    <Router>
      <ChangeMode>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/applyed' element={<ListApplyed />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ChangeMode>
    </Router>
  );
}

export default App;

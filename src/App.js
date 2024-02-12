import './App.css';
import { BrowserRouter as Router, Routes, BrowserRouter, Route } from 'react-router-dom'; 
import Home from './Pages/Home'
import Qincho from './Pages/Home'
import Add from './Pages/Home'
import Profile from './Pages/Home'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/qincho' element={<Qincho/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

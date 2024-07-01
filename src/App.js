import logo from './logo.svg';
import './App.css';
import Email from "./Components/Email";
import Regex from './Components/Regex';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About1 from './pages/About1';
import Header from './pages/Header';
import Contact from './pages/Contact';


function App() {
  return (
    <>     
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About1' element={<About1 />} />
          <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Email />
      <Regex />
    </>
  );
}

export default App;

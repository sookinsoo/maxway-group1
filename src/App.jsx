import { Route, Routes } from 'react-router-dom';
import './App.css'
import Services from './components/Filiallari/Services';
import Header from './pages/header/Header'
import Box from './pages/savat/Box';
import Locate from './pages/savat/Locate';

function App() {

  return (
    <div className='max-w-[1420px] mx-auto'>
      <Header />
      <Routes>
        <Route path='/services' element={<Services />} />
        <Route path='/box' element={<Box />} />
        <Route path='/locate' element={<Locate />} />
      </Routes>
    </div>
  );
}

export default App;

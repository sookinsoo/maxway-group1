import { Route, Routes } from 'react-router-dom';
import './App.css';
import Services from './components/Filiallari/Services';
import Header from './pages/header/Header';
import Box from './pages/savat/Box';
import Locate from './pages/savat/Locate';
import { createContext, useState } from 'react';
import Menu from './components/Menyu/Menu';
import AboutUs from './components/Bizhaqimizda/AboutUs';
import Connect from './components/Boglanish/Connect';

export const CountContext = createContext();
export const SumContext = createContext();

const App = () => {
  const [count, setCount] = useState(true);
  const [sum, setSum] = useState(1);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <SumContext.Provider value={{ sum, setSum }}>
        <div className='max-w-[1420px] mx-auto'>
          <Header />
          {/* <AboutUs/> */}
          <Routes>
            <Route path='/' element={<Menu />} />
            <Route path='/services' element={<Services />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/connect' element={<Connect />} />
            <Route path='/box' element={<Box />} />
            <Route path='/locate' element={<Locate />} />
          </Routes>
        </div>
      </SumContext.Provider>
    </CountContext.Provider>
  );
};

export default App;

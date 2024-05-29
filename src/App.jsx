import { Route, Routes } from 'react-router-dom';
import './App.css'
import Services from './components/Filiallari/Services';
import Header from './pages/header/Header'

function App() {

  return (
    <>
      {/* 
      <Services/> */}
      <Header/>
      <Routes>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </>
  );
}

export default App;

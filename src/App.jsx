import './App.css';
import { Header } from './components/header';

import { Footer } from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';





function App() {
  
  return (
  <><BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/about'element={<About/>}/>
      <Route path='/'element={<Home/>} />
    </Routes>
  </BrowserRouter>

  <Footer/>
  </>
  );
}

export default App;

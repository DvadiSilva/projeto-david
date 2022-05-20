import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Store from './components/Store';
import Marcacoes from './components/Marcacoes';
import Precos from './components/Precos';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/marcacoes" element={<Marcacoes/>}></Route>
          <Route path="/precos" element={<Precos/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

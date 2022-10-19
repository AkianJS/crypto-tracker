import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from './components/Navbar'
import Top40Cryptos from "./pages/Top40Cryptos";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/akian-crypto-tracker/top40cryptos" element={<Top40Cryptos/>}/>
        <Route path="/akian-crypto-tracker" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

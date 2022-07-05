import Nav from "./components/layout/Nav";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatesHistory from "./pages/StatesHistory";
import Footer from "./components/layout/Footer";
import Contact from "./pages/Contact";
import Company from "./pages/Company";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/company' element={<Company/>}/>           
          <Route path="/states">
            <Route path=":equipmentId" element={<StatesHistory/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
import "./App.css";
import Home from "./components/home";
import Payment from "./components/payment";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import NotFound from "./components/notfound";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/due" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default App

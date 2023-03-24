import Footer from "./components/Footer";
import Header from "./components/Header";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { useEffect } from "react";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    
    <Footer />
    </div>
    </Router>
    );
}

export default App;

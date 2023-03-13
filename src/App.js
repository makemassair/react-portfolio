import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

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

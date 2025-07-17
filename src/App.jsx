import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import TalksTeaching from './pages/TalksTeaching';
import Awards from './pages/Awards';
import WorkWithMe from './pages/WorkWithMe';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <main className="pt-16 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/talks" element={<TalksTeaching />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/work" element={<WorkWithMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

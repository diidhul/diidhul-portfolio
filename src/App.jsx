import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router dari react-router-dom
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pengalaman from './components/Pengalaman';
import Project from './components/Project';
import Contact from './components/Contact';
import Newsletter from './pages/Newsletter'; // Import halaman Newsletter dari folder pages

function App() {
  return (
    <Router>
      <div className='px-4 sm:px-8 md:px-16 lg:px-20 bg-offWhite'>

        <Navbar />
        {/*rooutes untuk pindah pindah halaman*/}
        <Routes>
          <Route path="/" element={
            // ini namanya react fragment👇
            // fungsinya untuk ngebungkus beberapa element dalam satu path tanpa nambahin elemen ke dom
            <>
              <Hero />
              <Pengalaman />
              <Project />
              <Contact />
            </>
          } />
          <Route path="/about" element={<aboutMe />} />
          <Route path="/newsletter" element={<Newsletter />} /> {/* routingan buat nampilin newslette */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

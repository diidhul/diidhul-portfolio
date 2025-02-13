import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router dari react-router-dom
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pengalaman from './components/Pengalaman';
import Project from './components/Project';
import Contact from './components/Contact';
import Newsletter from './pages/Newsletter'; // Import halaman Newsletter dari folder pages
import AboutMe from './pages/aboutMe';


function App() {
  return (
    <Router>
      <div className='min-h-screen px-4 sm:px-8 md:px-16 lg:px-20 bg-offWhite'>

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
          <Route path="/about" element={<AboutMe />} />
          <Route path="/newsletter" element={<Newsletter />} /> {/* routingan buat nampilin newslette */}
          <Route path="*" element={<h1 className='flex items-center justify-center h-screen text-3xl text-mediumPinkishBeige'>Work on proggress ...
          </h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Testimonials from './Components/Testimonials';
import Demo from './Components/Demo';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Navbar />
          <Hero />
          <About />
          <Testimonials />
          <Demo />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

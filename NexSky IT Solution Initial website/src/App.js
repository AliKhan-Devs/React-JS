
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Members from './Components/Members';
import Projects from "./Components/Projects";
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/members" element={<Members />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/contact" element={<Contact/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;

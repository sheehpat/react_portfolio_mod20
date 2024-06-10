import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactForm';
import Resume from './components/Resume';
import Footer from './components/footer';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<AboutMe />}></Route>
        <Route exact path="/Portfolio" element={<Portfolio />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Resume" element={<Resume />}></Route>
      </Routes>
      <Footer />

    </>

  )
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';
import Articles from './pages/Articles.jsx';
import Sidebar from './components/Sidebar.jsx';
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/article" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;

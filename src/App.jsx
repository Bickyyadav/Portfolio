import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';
import Articles from './pages/Articles.jsx';
import Sidebar from './components/Sidebar.jsx';
import Layout from './components/Layout.jsx';
import { BioProvider } from './context/index.jsx';

function App() {
  return (
    <>
    <BioProvider>
      <Routes>
        <Route path="/" element={ <Layout> <Home /></Layout>}/>
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact/></Layout>} />
        <Route path="/:project" element={<Layout><Project /></Layout>} />
        <Route path="/article" element={<Layout><Articles /></Layout>} />
      </Routes>
    </BioProvider>
    </>
  );
}

export default App;

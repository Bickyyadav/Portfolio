import { NavLink, useLocation } from 'react-router-dom';
import { navbar, social } from '../../public/data.jsx';
import { Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { BioContext } from '../context/index.jsx';

export default function Sidebar() {
const myname = useContext(BioContext)
  const [isOpen, setIsOpen] = useState(true);
  const path = useLocation();


  
  return (
    <div className={`bg-slate-100 h-screen p-4 flex flex-col justify-between transition-all duration-300
      ${isOpen ? 'w-64' : 'w-20'} fixed md:relative`}>
      
  
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-[-12px] p-2 bg-gray-200 rounded-full shadow-md transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

  
      <div className="mt-10">
        <div className="flex items-center space-x-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="Bicky Yadav" className="w-10 h-10 rounded-full" />
          {isOpen && (
            <div>
              <h2 className="text-sm font-semibold">{myname}</h2>
              <p className="text-gray-500 text-sm">Developer</p>
            </div>
          )}
        </div>

      
        <nav className="mt-6 space-y-2">
          {navbar.map(item => (
            <NavLink
              to={item.path}
              key={item.name}
              className={`flex items-center p-2 text-gray-700 hover:bg-slate-300 rounded-md transition ${path.pathname === item.path ? 'bg-slate-300' : ''}`}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span className="ml-2">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

    
        <div className="mt-6">
          {isOpen && <p className="text-gray-500 font-semibold">Socials</p>}
          <div className="flex flex-col mt-2 gap-2">
            {social.map(social => (
              <a key={social.name} href={social.link} className="flex items-center p-2 text-gray-500 hover:text-blue-600 transition">
                <span className="text-lg">{social.icon}</span>
                {isOpen && <span className="ml-2">{social.name}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <NavLink to="https://resume.io/resume-examples/driver" target="_"
          className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition text-center"
        >
          Read Resume →
        </NavLink>
      )}
    </div>
  );
}

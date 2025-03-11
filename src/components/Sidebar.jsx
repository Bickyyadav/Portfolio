import { NavLink } from 'react-router-dom';
import { navbar } from '../../public/data.jsx';
import { social } from '../../public/data.jsx';

function openInNewTab(url) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

export default function Sidebar() {
  return (
    <div className=" bg-slate-100 h-screen  p-6  flex flex-col justify-between">
      {/* Profile Section */}
      <div >
        <div className="flex items-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
            alt="Bicky yadav"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">Bicky Yadav</h2>
            <p className="text-gray-500 text-sm">Developer</p>
          </div>
        </div>
        <nav className="mt-6 space-y-2">
          {navbar.map(item => (
            <NavLink to={item.path} key={item.name} href={`#${item.name.toLowerCase()}`} className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-200 rounded-md transition">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-16">
          <p className="text-gray-500 font-semibold">Socials</p>
          <div className="flex flex-col space-y-2 mt-2 gap-3">
            {social.map(social => (
              <a key={social.name} href={social.link} className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition">
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <button onClick={() => openInNewTab('https://resume.io/resume-examples/driver')} className="bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition">
        Read Resume →
      </button>
    </div>
  );
}

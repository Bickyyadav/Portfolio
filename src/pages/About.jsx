import React from 'react';

const About = () => {
  return (
    <div className=' h-screen'>
      <div className=' px-48 py-20 flex flex-col gap-5'>
        <div>

        <h1 className=' text-4xl'> 💬</h1>
        <h1 className=' text-gray-700 text-4xl font-bold '>About Me</h1>
        </div>
        <div className=' h-60 flex  gap-10 '> 
          <img  src="https://sidefolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692005561659-cdba32d1e4a1%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=640&q=75" alt="image not load" className="h-60 w-40 rounded-md  rotate-3 shadow-xl block h-40 md:h-60 hover:rotate-0 transition duration-200" />
          <img src="https://sidefolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692544350322-ac70cfd63614%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=640&q=75" alt="image not load" className="h-60 w-40 rounded-md object-cover transform rotate-3 shadow-xl block h-40 md:h-60 hover:rotate-0 transition duration-200" />
          <img src="https://sidefolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692374227159-2d3592f274c9%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=640&q=75" alt="img not load" className="h-60 w-40 rounded-md object-cover transform rotate-3 shadow-xl block h-40 md:h-60 hover:rotate-0 transition duration-200"/>
          <img src="https://sidefolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1692445381633-7999ebc03730%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=640&q=75" alt="img not load" className="h-60 w-40 rounded-md object-cover transform rotate-3 shadow-xl block h-40 md:h-60 hover:rotate-0 transition duration-200" />
        </div>
        <div>
          <p className=' text-gray-400 text-lg py-1 w-[55rem]'>As a tech enthusiast, I am passionate about solving real-world problems by leveraging cutting-edge technologies. My focus is on building AI agents and applying innovative solutions to enhance efficiency, automation, and decision-making across various industries. The ability to create systems that can mimic human thinking and adapt to new environments is what excites me most about AI.</p>
          <p className=' text-gray-400 text-lg py-3 w-[55rem]'>Throughout my journey, I have developed a deep understanding of AI algorithms, machine learning, and natural language processing. I believe technology has the power to transform industries such as healthcare, finance, and more by improving outcomes, optimizing processes, and addressing complex challenges. For example, AI can revolutionize healthcare by analyzing patient data to recommend treatments or identify potential risks.</p>
          <p className=' text-gray-400 text-lg py-3 w-[55rem]'>What drives me is not just mastering the latest tools but also using them ethically to make a meaningful impact. I am committed to designing systems that are fair, transparent, and accessible. Continuously learning and adapting to new trends is crucial, and I actively engage in self-learning through courses, research, and collaboration with others.</p>
          <p className=' text-gray-400 text-lg py-3 w-[55rem]'>Ultimately, my goal is to use my skills to create solutions that improve lives and contribute to positive societal change.</p>
        </div>
        <div>
          <p className=' text-gray-400 text-xs flex mx-64 mb-0'>2025 — Built by Prem Sah</p>
        </div>
      </div>
    </div>
  );
};

export default About;

import { ContactRound, FolderDot, Github, House, Linkedin, MessageCircle, Newspaper, Twitter } from 'lucide-react';
export const social = [
  { name: 'Twitter', link: 'https://x.com/aashesh_j', icon: <Twitter /> },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/aashesh/', icon: <Linkedin /> },
  { name: 'GitHub', link: 'https://github.com/aashess', icon: <Github /> },
];

export const navbar = [
  { name: 'Home', icon: <House />, path: '/' },
  { name: 'About', icon: <MessageCircle />, path: '/about' },
  { name: 'Projects', icon: <FolderDot />, path: '/project' },
  { name: 'Articles', icon: <Newspaper />, path: '/article' },
  { name: 'Contact', icon: <ContactRound />, path: '/contact' },
];

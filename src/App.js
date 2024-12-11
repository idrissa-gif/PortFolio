import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiKaggle } from 'react-icons/si';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Idrissa M Dicko</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button
                  onClick={() => setActiveSection('about')}
                  className={`${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('projects')}
                  className={`${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveSection('contact')}
                  className={`${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md mt-auto">
        <div className="container mx-auto px-4 py-6 flex justify-center space-x-6">
          <a href="https://github.com/idrissa-gif" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Github size={35} />
          </a>
          <a href="https://www.linkedin.com/in/idrissa-m-dicko/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Linkedin size={35} />
          </a>
          <a href="https://www.kaggle.com/idrissamdicko" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <SiKaggle size={35} />
          </a>
          <a href="mailto:idrissamdicko@gmail.com" className="text-gray-600 hover:text-blue-600">
            <Mail size={35} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
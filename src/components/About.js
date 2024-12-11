import React from 'react';
import profilePicture from '../pictures/profile.png';
import { Youtube } from 'lucide-react';

function About() {
 return (
   <div className="text-center max-w-2xl mx-auto">
     <img
       src={profilePicture}
       alt="Profile"
       className="rounded-full w-48 h-48 mx-auto mb-6 object-cover shadow-lg"
     />
     <h2 className="text-3xl font-bold mb-4">Idrissa M Dicko</h2>
     <p className="text-gray-600 mb-4">
       I'm a Master's student in Data Science at University Paris Saclay, specializing in Large Language Models (LLMs). 
       Passionate about artificial intelligence and data technologies, I am actively seeking a 2-4 month internship 
       in data science and AI to apply my technical skills and contribute to innovative research and development projects.
     </p>
     <div className="flex justify-center items-center space-x-2">
       <a 
         href="https://www.youtube.com/@CodingWithIDRIS" 
         target="_blank" 
         rel="noopener noreferrer"
         className="text-red-600 hover:text-red-700 flex items-center"
       >
         <Youtube className="mr-2" size={24} />
         My YouTube Channel
       </a>
     </div>
   </div>
 );
}

export default About;
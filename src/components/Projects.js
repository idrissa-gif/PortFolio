import React from 'react';
import { Github } from 'lucide-react';

function Projects() {
 const projects = [
   {
    title: "Maze Game",
    description: "It is my first project built from scratch where the user have to collect a token in given time.",
    technologies: ["C", "Graphics.h","Structured Programming"],
    githubLink: "#",
    image: require(`../pictures/maze.png`)
   },
   {
    title: "Library Management System",
    description: "A Deskop Application for a University library Management.",
    technologies: ["JavaFx", "Java", "MongoDB"],
    githubLink: "#",
    image: require(`../pictures/LMS.png`)
   },
   {
    title: "Tonga",
    description: "A website to visite and Explore Africa.",
    technologies: ["MVC", "Java", "CSS","JavaSpring"],
    githubLink: "#",
    image: require(`../pictures/tonga.png`)
   }
 ];

 return (
   <div className="container mx-auto px-4">
     <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
     <div className="grid md:grid-cols-3 gap-6">
       {projects.map((project, index) => (
         <div
           key={index}
           className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
         >
           <img
             src={project.image}
             alt={project.title}
             className="w-full h-48 object-cover"
           />
           <div className="p-6">
             <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
             <p className="text-gray-600 mb-4">{project.description}</p>
             <div className="flex flex-wrap gap-2 mb-4">
               {project.technologies.map((tech, techIndex) => (
                 <span
                   key={techIndex}
                   className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded"
                 >
                   {tech}
                 </span>
               ))}
             </div>
             <a
               href={project.githubLink}
               className="text-blue-500 hover:underline flex items-center"
             >
               <Github className="mr-2" size={16} /> View on GitHub
             </a>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
}

export default Projects;
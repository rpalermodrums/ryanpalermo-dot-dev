import React, { useState } from 'react';
import DJDeck from '../components/DJDeck';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Music Visualizer",
    description: "A web-based music visualizer that creates dynamic visual effects based on audio input.",
    technologies: ["React", "Web Audio API", "Canvas"],
    imageUrl: "/placeholder-project-1.jpg",
    projectUrl: "#"
  },
  {
    id: 2,
    title: "Collaborative Playlist Creator",
    description: "A platform for creating and sharing collaborative playlists with friends.",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
    imageUrl: "/placeholder-project-2.jpg",
    projectUrl: "#"
  },
  {
    id: 3,
    title: "AI-Powered Music Recommendation Engine",
    description: "An AI-driven system that recommends music based on user preferences and listening history.",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    imageUrl: "/placeholder-project-3.jpg",
    projectUrl: "#"
  }
];

const ProjectCard: React.FC<Project> = ({ title, description, technologies, imageUrl, projectUrl }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="p-6">
      <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-base mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={projectUrl}
        className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement real password validation here and replace dummy projects with real ones
    if (password === 'letmein') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
        <form onSubmit={handlePasswordSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Enter Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-gray-800"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">DJ Deck</h2>
        <DJDeck />
      </div>
    </div>
  );
};

export default Projects;
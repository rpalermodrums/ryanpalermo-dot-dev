import React from 'react';

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
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {technologies.map((tech, index) => (
        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
    <div className="px-6 py-4">
      <a href={projectUrl} className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors duration-200 inline-block">
        View Project
      </a>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
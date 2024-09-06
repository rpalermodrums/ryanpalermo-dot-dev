import type React from "react";
import { useState } from "react";
import DJDeck from "../components/DJDeck";

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
		description:
			"A web-based music visualizer that creates dynamic visual effects based on audio input.",
		technologies: ["React", "Web Audio API", "Canvas"],
		imageUrl: "/placeholder-project-1.jpg",
		projectUrl: "#",
	},
	{
		id: 2,
		title: "Collaborative Playlist Creator",
		description:
			"A platform for creating and sharing collaborative playlists with friends.",
		technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
		imageUrl: "/placeholder-project-2.jpg",
		projectUrl: "#",
	},
	{
		id: 3,
		title: "AI-Powered Music Recommendation Engine",
		description:
			"An AI-driven system that recommends music based on user preferences and listening history.",
		technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
		imageUrl: "/placeholder-project-3.jpg",
		projectUrl: "#",
	},
];

const ProjectCard: React.FC<Project> = ({
	title,
	description,
	technologies,
	imageUrl,
	projectUrl,
}) => (
	<div className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105">
		<img className="object-cover w-full h-48" src={imageUrl} alt={title} />
		<div className="p-6">
			<h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
				{title}
			</h2>
			<p className="mb-4 text-base text-gray-700 dark:text-gray-300">
				{description}
			</p>
			<div className="flex flex-wrap gap-2 mb-4">
				{technologies.map((tech, index) => (
					<span
						key={`${index}-${tech}`}
						className="px-2 py-1 text-sm text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
					>
						{tech}
					</span>
				))}
			</div>
			<a
				href={projectUrl}
				className="inline-block px-4 py-2 font-bold text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600"
			>
				View Project
			</a>
		</div>
	</div>
);

const Projects: React.FC = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [password, setPassword] = useState("");

	const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// TODO: Implement real password validation here and replace dummy projects with real ones
		if (password === "letmein") {
			setIsAuthenticated(true);
		} else {
			alert("Incorrect password");
		}
	};

	if (!isAuthenticated) {
		return (
			<div className="container flex items-center justify-center h-screen px-4 py-8 mx-auto">
				<form
					onSubmit={handlePasswordSubmit}
					className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800"
				>
					<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
						Enter Password
					</h2>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2 mb-4 text-gray-800 border rounded"
						placeholder="Password"
					/>
					<button
						type="submit"
						className="w-full px-4 py-2 font-bold text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}

	return (
		<div className="container px-4 py-8 mx-auto">
			<h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
				My Projects
			</h1>
			<div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
			<div className="mt-12">
				<h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
					DJ Deck
				</h2>
				<DJDeck />
			</div>
		</div>
	);
};

export default Projects;

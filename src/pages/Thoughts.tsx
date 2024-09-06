import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	slug: string;
}

const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: "On Music and Software Engineering",
		slug: "music-tech-relationship",
		excerpt:
			"Exploring how technology is shaping the future of music production and distribution.",
		date: "2024-09-01",
		readTime: "5 min read",
	},
];

const BlogPostCard: React.FC<BlogPost> = ({
	title,
	excerpt,
	date,
	readTime,
	slug,
}) => (
	<Link to={`/thoughts/${slug}`} className="block">
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow"
		>
			<h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
				{title}
			</h2>
			<p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
			<div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
				<span>{new Date(date).toLocaleDateString()}</span>
				<span>{readTime}</span>
			</div>
		</motion.div>
	</Link>
);

const Thoughts: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
				My Thoughts
			</h1>
			<div className="space-y-8">
				{blogPosts.map((post) => (
					<BlogPostCard key={post.id} {...post} />
				))}
			</div>
		</div>
	);
};

export default Thoughts;

import Markdown from "markdown-to-jsx";
import type React from "react";
import { useParams } from "react-router-dom";
import musicTechContent from "../assets/posts/v1__20240905__music-tech-relationship.md?raw";

const markdownFiles = {
	"music-tech-relationship": musicTechContent,
	// Add more markdown files here as needed
};

const MarkdownView: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	const content = slug ? markdownFiles[slug as keyof typeof markdownFiles] : "";
	console.log(content);
	console.log(typeof content);

	return (
		<>
			<div className="container px-4 py-8">
				<Markdown className="prose max-w-none text-[revert] font-[revert]">
					{content}
				</Markdown>
			</div>
		</>
	);
};

export default MarkdownView;

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

const Contact: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{ from_name: name, from_email: email, message },
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			);
			alert("Thank you for your message! I'll get back to you soon.");
			setName("");
			setEmail("");
			setMessage("");
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Oops! Something went wrong. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg"
			>
				<h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
					Contact Me
				</h1>
				<form onSubmit={handleSubmit} className="mt-8 space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block mb-1 text-gray-700 dark:text-white"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="w-full px-3 py-2 border rounded-md"
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block mb-1 text-gray-700 dark:text-white"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full px-3 py-2 border rounded-md"
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block mb-1 text-gray-700 dark:text-white"
						>
							Message
						</label>
						<textarea
							id="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							className="w-full px-3 py-2 border rounded-md"
							rows={4}
						/>
					</div>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type="submit"
						disabled={isSubmitting}
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
					>
						{isSubmitting ? "Sending..." : "Send Message"}
					</motion.button>
				</form>
			</motion.div>
		</div>
	);
};

export default Contact;
